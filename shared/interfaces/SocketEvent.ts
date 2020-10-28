import SocketPackage from "./SocketPackage";

interface SocketEvent extends Event {
	detail: SocketPackage
}

export default SocketEvent;
