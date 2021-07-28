import { Router, Request, Response, NextFunction } from "express";

interface ReqBody {
  email: string;
  password: string;
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if(req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
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
  const { email, password } = req.body;
  if(email === 'hi@hi.com' && password === 'password') {
    // make this person as logged in
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {

  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>
          you are logged in
        </div>
        <a href="/logout">Logout</a>
      </div>
    `);
  }else {
    res.send(`
    <div>
      <div>
        you are not logged in
      </div>
      <a href="/login">Login</a>
    </div>
  `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});

export { router };
