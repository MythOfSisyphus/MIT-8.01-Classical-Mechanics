# Problem Set 1: Kinematics

## Reasoning for Problem 3. Rocket Launch:

We can understand the problem setup better using our two dimensional coordinate system.
Suppose initial position of rocket is at $(0, 0)$ and stone is at $(0, h)$.

Rocket's time-varying accelerating is given by, $a_y(t) = A - Bt$ where $A$ and $B$ are positive constants. Since acceleration is rate of change in velocity, therefore,

$$\begin{align*}
\frac{d v_y(t)}{dt} &= a_y(t) \\
v_y(t) &= \int a_y(t) \, dt \\
v_y(t) &= \int (A - Bt) \, dt \\
v_y(t) &= At - \frac{B t^2}{2} + C_1
\end{align*}$$

$v_y(t) = 0$ at $t = 0$ because rocket is starting from rest. Using this in last equation, we get,
$$v_y(t) = At - \frac{B t^2}{2}.$$

And velocity is defined as rate of change in position, therefore using the same steps as above, we get,
$$y(t) = \frac{A t^2}{2} - \frac{B t^3}{6}.$$
Stone is initially is at rest means $s_0 = h$ and $s(t) = h - \frac{1}{2} g t^2$.

At maximum height rocket's velocity is $0$, implies $v_y(t) = 0 \implies t = 0$ or $t = 2A / B$.

Since the stone hits the rocket at the instant when the rocket reaches its maximum height means, at time $t = 2A/B$,

$$\begin{align*}
y(2A/B) &= s(2A/B) \\
\frac{A}{2} \left( \frac{2A}{B} \right)^2 - \frac{B}{6} \left( \frac{2A}{B} \right)^3  &= h - \frac{1}{2} g \left( \frac{2A}{B} \right)^2 \\
h &= \left( \frac{2A}{B} \right)^2 \left( \frac{A}{3} + g \right) \\
h &= \frac{2 A^2 (A + 3g)}{3 B^2}.
\end{align*}$$

### The Dimensional Check
To check the units, we need to identify the dimensions of $A$ and $B$ from the original acceleration equation: $a_y(t) = A - Bt$.

1. For $A:$ Since $a_y$ is accelerating $(m / s^2)$, $A$ must also be $m/s^2$.
2. For $B:$ Since the term $Bt$ must result in units of accelerating, and $t$ is in seconds $(s), B$ must have units of $m / s^2$.
3. For $g:$ This is standard gravitational accelerating, so it is $m / s^2$.

Now, let's look at the final expression:
$$h = \frac{2 A^2 (A + 3g)}{3 B^2}.$$

- **Numerator units:** $A^2$ is $(\text{m/s}^2)^2 = \text{m}^2/\text{s}^4$.
    
    - $(A + 3g)$ is $(\text{m/s}^2 + \text{m/s}^2) = \text{m/s}^2$.
        
    - Multiplying them: $(\text{m}^2/\text{s}^4) \cdot (\text{m/s}^2) = \mathbf{m^3/s^6}$.
        
- **Denominator units:** $B^2$ is $(\text{m/s}^3)^2 = \mathbf{m^2/s^6}$.
    
- **Final Ratio:**
$$\frac{\text{m}^3/\text{s}^6}{\text{m}^2/\text{s}^6} = \mathbf{m} \text{ (meters)}$$

The units match!

---
## Reasoning for Problem 4. Throw and Catch

Again, two dimensional coordinate system is going to help us a lot, since we don't need to worry about the height at which ball is thrown. We can freely assume initially ball is at $(0, 0)$ and person is at $(d, 0)$. Try imagining this person as a dot that moves along the *x-axis* as soon as the ball is thrown.

It is given that the initial ball's velocity is at an angle $\theta$ with respect to the ground and has a magnitude $v_0$. Therefore, its velocity components along *x-axis* and *y-axis* are,
$$v_x(t) = v_0 \cos(\theta), \quad v_y(t) = v_0 \sin(\theta) - g t$$
respectively and its positions on both axis at any time $t$ is given by,
$$x(t) = (v_0 \cos(\theta)) t, \quad y(t) = (v_0 \sin(\theta))t - \frac{1}{2} g t^2.$$

Person's acceleration is, $a_p(t) = Bt$, implies,
$$\begin{align*}
\frac{d v_p(t)}{dt} &= a_p(t) = Bt \\
v_p(t) &= \int Bt \, dt \\
v_p(t) &= \frac{B t^2}{2} + C
\end{align*}$$
where $C$ is constant of integration. Since we know person was initially at rest, so $v_p(t) = 0$ for $t = 0$, this gives us,
$$v_p(t) = \frac{B t^2}{2}.$$
Similarly, person's position at any time $t$ is given by,
$$\begin{align*}
\frac{d x_p(t)}{dt} &= v_p(t) \\
x_p(t) &= \int v_p(t) \, dt \\
&= \frac{B t^3}{6} + C.
\end{align*}$$
At $t = 0, x_p(t) = d$, this gives us $C = d$, after putting this into last equation, we get,
$$x_p(t) = \frac{B t^3}{6} + d.$$
The line in question, *"The person catches the ball at exactly the same height it was thrown from"*, means the time ball reaches ground ball and person are at the same position.

To find at what time ball reaches ground set, $y(t) = 0$ and get $t = (2 v_0 \sin(\theta)) / g$.
Further,
$$\begin{align*}
x_p((2 v_0 \sin(\theta)) / g) &= x((2 v_0 \sin(\theta)) / g) \\
\frac{B}{6} \left( \frac{2 v_0 \sin(\theta)}{g} \right)^3 + d &= (v_0 \cos(\theta)) \cdot \left( \frac{2 v_0 \sin(\theta)}{g} \right) \\
B &= \frac{3 g^3}{4 v_0^3 sin^3(\theta)} \left( \frac{v_0^2 \sin(2\theta)}{g} - d \right)
\end{align*}$$

### The Dimensional Check
From $a_p(t) = Bt$, we infer that units of $B$ must be $m/s^3$.

1. **The pre-factor:** $$\frac{g^3}{v_0^3} = \frac{(m / s^2)^3}{(m / s)^3} = \frac{m^3 / s^6}{m^3 / s^3} = \frac{1}{s^3}$$
2. **The term inside the parentheses:** $$\left( \frac{v_0^2}{g} - d \right) = \left( \frac{(m/s)^2}{m/s^2} - m \right) = (m - m) = m$$
   *(In dimensional analysis, $m - m$ doesn't equal zero; it means the resulting dimension is Length.)*

3. **Putting it together:**
$$\left( \frac{1}{s^3} \right) \cdot (m) = m / s^3.$$


---
## Reasoning for Problem 5. Vertical Collision

