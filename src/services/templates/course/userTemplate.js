export const userWelcomeEmailTemplate = (surveyData) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">

    <header style="text-align: center; padding: 10px; background-color: #f4f4f4;">
      <span style="font-family: sans-serif; font-size: 20px; font-weight: bold; color: #00838f;">Async SkillUp Training</span>
    </header>

    <main style="padding: 20px;">
      <h2>Welcome to the AI Training Course – Unlock Your Career Potential!</h2>

      <p>Hi <strong>${surveyData.firstname.toUpperCase()}</strong>,</p>

      <p>
      Congratulations on registering for our 2-Day Lunchbox AI Training!  We're thrilled to have you join us on this exciting journey to unlock the power of AI and boost your productivity.
      </p>

      <p>
      By attending this course, you’ll discover how to:
      </p>

      <ul style="font-weight: bold;">
        <li>Automate daily tasks and streamline your workflow</li>
        <li>Use AI-driven data analysis to make smarter decisions</ol>
        <li>Future-proof your career with skills for the modern workplace</li>
      </ul>

      <p>
      This training is designed to provide you with practical, real-world tools that will enhance your role and help you stay ahead in today’s fast-paced work environment.      
      </p>

      <p>
      Stay tuned for more details as we get ready to kick off!
      </p>

      <p>
      We’re looking forward to seeing you there and helping you take your career to the next level!
      </p>

      <p>
      If you have further questions, kindly reach out to us at contacts@async.ng
      </p>

      <p style="text-align: center;">  
          <a href="https://chat.whatsapp.com/JGcvWWYcQWJ4bAADdRnp1A" style="padding: 10px 20px; background-color: #25D366; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; margin: 1em 0; font-family: Arial, sans-serif;">  
             Join Our WhatsApp Group  
          </a>  
      </p>

      <p>
      Let's build our digital legacy together!
      </p>

      <p>
      Best regards,
      <br>
      Alex Imenwo
      <br>
      <strong>Async SkillUp Training Team</strong>
      </p>

      <div style="text-align: center;">
        <a href="https://training.async.ng" style="padding: 10px 20px; background-color: #28A745; color: white; text-decoration: none; border-radius: 5px; text-align: center; margin: 1em 0;">Course Dashboard</a>
      </div>

      <br>
      <br>

    </main>
  </div>
`;
