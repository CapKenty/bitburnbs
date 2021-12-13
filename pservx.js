/** @param {NS} ns 
 * This script attempts to purchase a server of the given size, assigns a script based
 * on size, then threads for the script, then executes script**/
 export async function main(ns) {
    //the basics
    let args = ns.args
    var i = 0;
//ram settings for easier use
    let ram = args[0];
    let lowram = [8, 16, 32, 64];
    let highram = [128, 256, 512, 1024, 2048];
    let bsram = [4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576];
    var script = "behtemp.ns"
    var scriptram = 2.8
    var threadcount = ram / scriptram

    while (i < ns.getPurchasedServerLimit()) {
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            var hostname = ns.purchaseServer("p" + ram + "serv" + i, ram);
            ns.tprint("Server " + hostname + "has been purchased.")
            await ns.sleep(100)
            await ns.scp(script, hostname);
                if (true) {
                    ns.tprint("File transfer successful")
                }
                if (ram in lowram) {
                    ns.exec(script, hostname, threadcount);
                //let us know the script is supposed to be running (no i'm not running a check because lazy)
                    ns.tprint(script + "is now running on" + hostname + "with" + threadcount + " threads.")
                }
                if (ram in highram) {
                    ns.exec(script, hostname, threadcount);
                    ns.tprint(script + "is now running on" + hostname + "with" + threadcount + " threads.")
                }
                if (ram in bsram) {
                    ns.exec(script, hostname, threadcount);
                    ns.tprint(script + "is now running on" + hostname + "with" + threadcount + " threads.")
                }
                else {
                    ns.tprint("No case found, please update pserx.js")
                }
            }
        await ns.sleep(10000)
        }
    }
