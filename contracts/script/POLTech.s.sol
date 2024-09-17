// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/POLTech.sol";

contract DeployPOLTech is Script {
    function run() external {
        vm.startBroadcast();

        new POLTech();

        vm.stopBroadcast();
    }
}
