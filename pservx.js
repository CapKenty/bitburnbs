//this script takes chosen input and buys that type of server until max
/** @param {NS} ns **/
export async function main(ns) {
    var ram = args_[0];
    var i = 0;
    while (i < ns.getPurchasedServerLimit()) {
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            var hostname = ns.purchaseServer("p" + ns.args[0] + "serv" + i, ram);
            await ns.sleep(100)
            await ns.scp("silver.ns", hostname);
                if(true) {
                    ns.tprint("File transfer successful")
                }
                if (ns.args[0] == 8) {
                ns.exec("silver.ns", hostname, 3);
                }
                if (ns.args[0] == 16) {
                ns.exec("silver.ns", hostname, 6);
                }
                if (ns.args[0] == 32) {
                ns.exec("silver.ns", hostname, 12); 
                }
        }
        await ns.sleep(10000)
    }
}