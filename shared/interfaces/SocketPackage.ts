import LooseObject from "./LooseObject";
import Player from "@/interfaces/Player";

interface SocketPackage {
	from: string,
	request: string,
	status: number | null,
	message: string,
	data: LooseObject | Player
}

export default SocketPackage;
