import { AuthChecker } from "type-graphql";
import { ResolverContext } from "../src";

export enum Roles {
  ADMIN = "ADMIN",
}

export const authChecker: AuthChecker<ResolverContext, Roles> = (
  { context },
  roles
) => {
  if (!context.user.doesExist) {
    return false;
  }
  let resp = true;
  if (roles.includes(Roles.ADMIN)) {
    resp = !context.user.isAdmin;
  }
  return resp;
};
