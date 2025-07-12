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

**Note:** The port number of the process is determined using these values, listed in order of priority:
- The default `process.env.PORT` value, if there is one
- The `PORT` value defined in `.env`, if there is one
- `3000`