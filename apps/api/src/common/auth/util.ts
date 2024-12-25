import { GetUserType, Role } from 'src/common/types';
import { ForbiddenException } from '@nestjs/common';

/**
 * Enforces row-level permissions by checking user roles or matching user IDs.
 *
 * @param user - The authenticated user making the request.
 * @param requestedUid - The ID(s) of the resource the user is trying to access.
 *                        Can be a string or an array of strings.
 * @param roles - Roles that have unrestricted access (default: ['admin']).
 *
 * @returns {boolean} - Returns `true` if access is granted; otherwise, throws an exception.
 * @throws {ForbiddenException} - If the user does not have permission to access the resource.
 */
export const checkRowLevelPermission = (
  user: GetUserType,
  requestedUid?: string | string[],
  roles: Role[] = ['admin'],
) => {
  // If no resource ID(s) are provided, deny access.
  if (!requestedUid) return false;

  // Grant access if the user has a privileged role.
  if (user.roles?.some((role) => roles.includes(role))) {
    return true;
  }

  // Normalize the requested ID(s) into an array of valid strings.
  const ids =
    typeof requestedUid === 'string'
      ? [requestedUid] // Wrap a single ID in an array.
      : requestedUid.filter(Boolean); // Remove any falsy values.

  // Check if the user's ID matches any of the requested IDs.
  // If no match is found, throw an exception to deny access.
  if (!ids.includes(user.id)) {
    throw new ForbiddenException(); // Deny access with a 403 status code.
  }
};
