import LooseObject from "./LooseObject";

interface SocketPackage {
	request: string | null,
	status: number | null,
	message: string,
	data: LooseObject | null
}

export default SocketPackage;
