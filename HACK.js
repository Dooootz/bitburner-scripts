/** @param {NS} ns **/
export async function main(ns) {

    var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
    var securityThresh = ns.getServerMinSecurityLevel(target) + 5;
 
    // if the target servers current security level is LOWER than the security threshold 
    // &&
    // if the target servers current money avail is higher than the money threshold 
    // then execute HACK
    while (ns.getServerSecurityLevel(target) < securityThresh && ns.getServerMoneyAvailable(target) > moneyThresh) {
       await ns.hack(target);
    }
 }