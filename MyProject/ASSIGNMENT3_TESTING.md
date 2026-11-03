# Assignment 3 — Implementation and Evidence Checklist

## Setup
1. Open a terminal in the project root and run `npm install`; in `client`, run `npm install`.
2. Copy `.env.example` to `.env` and supply your own MongoDB URI, long random `JWT_SECRET`, unique `ADMIN_EMAIL` and `ADMIN_PASSWORD`. Never commit the actual `.env`.
3. Run `npm run dev` from the root. Backend defaults to port 5000; Vite proxies `/api` to it. Visit the URL shown by Vite and click **Manage**.
4. The admin account is seeded on startup if absent; sign in with your configured admin credentials. Normal signups receive the `user` role. The existing admin password is not overwritten on subsequent starts.

## API evidence (Postman/Thunder Client)
Set `base=http://localhost:5000/api`. Use a newly created normal-user JWT and the seeded admin JWT as Bearer tokens.

- Authentication: `POST /auth/signup` with `{ "name":"Student", "email":"student@example.com", "password":"example-only-pass" }` returns 201; `POST /auth/signin` returns token; `GET /auth/profile` with Bearer token returns 200; without token returns 401.
- `POST /auth/signout` acknowledges sign-out but **JWTs are stateless**: clear the token in the browser; a copied, unexpired token is still usable until expiry. Session token is held in browser `sessionStorage`, so closing the tab clears it. For immediate revocation, a denylist/refresh-token system would be needed.
- Projects and qualifications: Normal user `GET /api/projects` and `GET /api/qualifications` return 200; normal user `POST`, `PUT /:id`, and `DELETE /:id` return 403. An unauthenticated request to these routes returns 401.
- Admin CRUD: For **each** of `projects` and `qualifications`: `POST /` creates a record; copy its returned `_id`; `GET /` lists it; `GET /:id` returns it; `PUT /:id` updates it; `DELETE /:id` removes it; `GET /:id` after deletion returns 404.
- Example project/qualification body: `{ "title":"Sample Entry", "completionDate":"2026-10-31", "description":"Assignment 3 CRUD evidence" }`.
- Contacts: public `POST /api/contacts` accepts `{ "firstName":"Sample", "lastName":"Visitor", "contactNumber":"555-0100", "email":"visitor@example.com", "message":"Test submission" }`. Admin Bearer token is required for contact list, by-ID read, update, and delete. Verify each by the created `_id`; unauthenticated access should return 401, and normal-user read should return 403.
- Users `/api/users` is administrator-only; account creation for normal users uses `/api/auth/signup`.

## Screenshot checklist
Capture request URL, method, appropriate HTTP status, response body, and MongoDB `_id` for each by-ID CRUD operation. Also capture authentication success, 401 unauthorized, 403 regular-user write rejection, admin CRUD, public contact form success, signed-in React management page with forms and validation, and the matching MongoDB Atlas/Compass collections after create/update/delete.

## Limitations to verify
The browser-based management screen shows projects and qualifications to signed-in users and contacts only to admins. Database connectivity and browser UX must be tested with your own running MongoDB instance; this archive's static checks do not prove database writes. Do not upload screenshots containing tokens, passwords, or connection strings.
