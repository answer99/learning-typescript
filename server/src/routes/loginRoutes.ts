import { Router, Request, Response } from "express";

interface ReqBody {
  email: string;
  password: string;
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Summit</button>
    </form>
  `);
});

// From @types/express@4.17.2, the Request type uses generics.
router.post('/login', (req: Request<{}, {}, ReqBody>, res: Response) => {
  const { email } = req.body;
  res.send(email.toUpperCase());
})

export { router };
