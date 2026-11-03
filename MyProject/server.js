import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import contactRoutes
    from "./server/routes/contact.routes.js";

import projectRoutes
    from "./server/routes/project.routes.js";

import qualificationRoutes
    from "./server/routes/qualification.routes.js";

import userRoutes
    from "./server/routes/user.routes.js";

import "dotenv/config";

import app from "./server/express.js";
import router from "./server/assets-router.js";

import authRoutes
    from "./server/routes/auth.routes.js";

import connectDatabase from "./server/config/database.js";


import { seedAdmin } from "./server/config/seed-admin.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

    // Connect to MongoDB before starting the server
await connectDatabase();
await seedAdmin();


// Existing skeleton route
app.use(
    "/src",
    router
);


// Simple backend test route
app.get(
    "/",
    (req, res) => {

        res.send(
            "Welcome to MyPortfolio backend"
        );

    }
);

app.use(
    "/api/contacts",
    contactRoutes
);


app.use(
    "/api/projects",
    projectRoutes
);


app.use(
    "/api/qualifications",
    qualificationRoutes
);


app.use(
    "/api/users",
    userRoutes
);

app.use(
    "/api/auth",
    authRoutes
);

// Start Express server
app.listen(
    PORT,
    () => {

        console.log(
            `Server running at http://localhost:${PORT}/`
        );

    }
);


export default app;