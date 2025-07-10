# Install

Install with:

```node
npm install
```

# Use

Run with:

```node
npm run start
```

Access through API endpoints. For example:
- `/api/`
- `/api/2025-07-11`
- `/api/1752192000000`

**Note:** The port number of the process is determined with these priorities:
- The default `process.env.PORT` value
- The `PORT` value defined in `.env`
- `3000`