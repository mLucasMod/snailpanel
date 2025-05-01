CREATE TABLE IF NOT EXISTS Users(
   idUser INTEGER PRIMARY KEY AUTOINCREMENT,
   username VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   password VARCHAR(50) NOT NULL,
   UNIQUE(username),
   UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS Apps(
   idApp VARCHAR(8),
   name VARCHAR(50),
   PRIMARY KEY(idApp)
);

-- CREATE TABLE AppPermissions(
--    idAppPermission VARCHAR(50),
--    PRIMARY KEY(idAppPermission)
-- );

-- CREATE TABLE Permissions(
--    idPermission VARCHAR(50),
--    PRIMARY KEY(idPermission)
-- );

-- CREATE TABLE ApiKeys(
--    idApi INT AUTO_INCREMENT,
--    clientId VARCHAR(50) NOT NULL,
--    clientSecret VARCHAR(50) NOT NULL,
--    name VARCHAR(50),
--    description VARCHAR(50),
--    idUser INT NOT NULL,
--    PRIMARY KEY(idApi),
--    UNIQUE(clientId),
--    UNIQUE(clientSecret),
--    FOREIGN KEY(idUser) REFERENCES Users(idUser)
-- );

-- CREATE TABLE UsersPermissions(
--    idUser INT,
--    idPermission VARCHAR(50),
--    PRIMARY KEY(idUser, idPermission),
--    FOREIGN KEY(idUser) REFERENCES Users(idUser),
--    FOREIGN KEY(idPermission) REFERENCES Permissions(idPermission)
-- );

-- CREATE TABLE AppsUsersPermissions(
--    idUser INT,
--    idAppPermission VARCHAR(50),
--    idApp VARCHAR(8),
--    PRIMARY KEY(idUser, idAppPermission, idApp),
--    FOREIGN KEY(idUser) REFERENCES Users(idUser),
--    FOREIGN KEY(idAppPermission) REFERENCES AppPermissions(idAppPermission),
--    FOREIGN KEY(idApp) REFERENCES Apps(idApp)
-- );

-- INSERT INTO Permissions (idPermission) VALUES
-- ('ADMIN'),

-- ('SEE_APPS'),
-- ('ADD_APPS'),
-- ('EDIT_APPS'),
-- ('DELETE_APPS'),

-- ('SEE USERS'),
-- ('ADD_USERS'),
-- ('EDIT_USERS'),
-- ('DELETE_USERS'),

-- ('SEE_TEMPLATES'),
-- ('ADD_TEMPALTES'),
-- ('EDIT_TEMPLATES'),
-- ('DELETE_TEMPLATES');

-- INSERT INTO AppPermissions (idAppPermission) VALUES
-- ('ADMIN'),

-- ('EDIT_SETTINGS'),
-- ('EDIT_PERMISSIONS'),

-- ('SEE_CONSOLE'),
-- ('ALLOW_COMMANDS'),
-- ('SEE_STATISTICS'),

-- ('START'), 
-- ('STOP'),
-- ('KILL'),
-- ('INSTALL'),

-- ('VIEW_FILES'),
-- ('EDIT_FILES'),
-- ('ALLOW_SFTP');
