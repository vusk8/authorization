// For Node.js:
const { newEnforcer } = require("casbin");
// For browser:
// import { newEnforcer } from 'casbin';

const main = async () => {
  const enforcer = await newEnforcer(
    "rbac_with_resource_roles_model.conf",
    "policy.csv"
  );

  // await enforcer.addPolicy('campaign_manager', 'campaign', 'read');
  // await enforcer.addPolicy('campaign_manager', 'campaign', 'write');
  // await enforcer.addNamedGroupingPolicy('g2', 'campaign', 'insert_group');
  // await enforcer.addNamedGroupingPolicy('g2', 'generated_pdfs', 'insert_group');

  // await enforcer.addRoleForUser('user1', 'campaign_manager');

  // await enforcer.savePolicy();

  console.log(enforcer.enforceSync("alice", "campaign", "read"));
  console.log(enforcer.enforceSync("alice", "campaign", "write"));
};

main();
