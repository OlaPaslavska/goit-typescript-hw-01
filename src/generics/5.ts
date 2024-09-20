export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
type RoleDescriptionType = Record<UserRole, string>;

const RoleDescription: RoleDescriptionType = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
