/** @param {NS} ns **/
export async function main(ns) {
	var securityThresh = ns.getServerMinSecurityLevel(target) + 5;
	while (ns.getServerSecurityLevel(target) > securityThresh) {
		await ns.weaken(target);
		ns.prompt(target);
	}
	ns.sleep(10000);
}