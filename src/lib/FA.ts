import {
	config,
	icon,
	IconName,
	IconPrefix,
	library
} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/pro-solid-svg-icons";
import {far} from "@fortawesome/pro-regular-svg-icons";
import {fal} from "@fortawesome/pro-light-svg-icons";
import {fad} from "@fortawesome/pro-duotone-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";

class FA {
	constructor() {
		config.autoAddCss = false;

		library.add(fas);
		library.add(far);
		library.add(fal);
		library.add(fad);
		library.add(fab);
	}

	public getIcon(prefix: IconPrefix, iconName: IconName) {
		return icon({
			prefix,
			iconName
		});
	}
}

export default FA;
