/** @param {NS} ns **/
export async function main(ns) {
    var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
    while (ns.getServerMoneyAvailable(target) < moneyThresh) {
        await ns.grow(target);
    }
    ns.sleep(10000)
}