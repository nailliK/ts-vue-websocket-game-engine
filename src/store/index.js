"use strict";
exports.__esModule = true;
var vuex_1 = require("vuex");
var uuid = require("uuid");
var Shuffle_1 = require("@/lib/Shuffle");
exports["default"] = vuex_1.createStore({
    state: {
        colors: [
            "Red",
            "Blue",
            "Green",
            "Yellow"
        ],
        lowValue: 1,
        highValue: 12,
        deck: [],
        discard: [],
        players: []
    },
    mutations: {
        hydrateDeck: function (state) {
            // 4 skip cards
            for (var i = 0; i < 4; i++) {
                state.deck.push({
                    id: uuid.v4(),
                    color: null,
                    value: 0,
                    points: 15,
                    special: true,
                    name: "Skip"
                });
            }
            // 8 wild cards
            for (var i = 0; i < 8; i++) {
                state.deck.push({
                    id: uuid.v4(),
                    color: null,
                    value: 0,
                    points: 25,
                    special: true,
                    name: "Wild"
                });
            }
            // 1-12 of each color * 2
            for (var i = state.lowValue; i < state.highValue + 1; i++) {
                for (var n = 0; n < state.colors.length; n++) {
                    state.deck.push({
                        id: uuid.v4(),
                        color: state.colors[n],
                        value: i,
                        points: i < 10 ? 5 : 10,
                        special: false,
                        name: state.colors[n] + " " + i
                    });
                    state.deck.push({
                        id: uuid.v4(),
                        color: state.colors[n],
                        value: i,
                        points: i < 10 ? 5 : 10,
                        special: false,
                        name: state.colors[n] + " " + i
                    });
                }
            }
        },
        shuffleDeck: function (state) {
            state.deck = new Shuffle_1["default"]().fisherYates(state.deck);
        },
        addPlayer: function (state, playerName) {
            state.players.push({
                id: uuid.v4(),
                name: playerName,
                points: 0,
                hand: [],
                played: []
            });
        }
    },
    actions: {},
    modules: {}
});
