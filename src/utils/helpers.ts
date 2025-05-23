// Helper function to format salary range
export function formatSalary(from: number, to: number): string {
  // You can import a proper currency formatting function from utils
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
  
  return `${formatter.format(from)} - ${formatter.format(to)}`;
}

// Generate a complete, modern email template
export function generateEmailTemplate(jobListingHtml: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>JobMarshal - Latest Job Opportunities</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background-color: #00c951; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">JobMarshal</h1>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0; font-size: 16px;">Your Career Companion</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px 24px;">
          <h2 style="margin: 0 0 8px; font-size: 20px; color: #333; font-weight: 600;">Your Personalized Job Matches</h2>
          <p style="margin: 0 0 24px; font-size: 15px; color: #666; line-height: 1.5;">
            We've found these opportunities that match your skills and preferences. Check them out below!
          </p>
          
          <!-- Job Listings -->
          <div style="margin-top: 24px;">
            ${jobListingHtml}
          </div>
          
          <!-- CTA Button -->
          <div style="margin-top: 32px; text-align: center;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}" style="display: inline-block; background-color: #00c951; color: white; font-weight: 500; font-size: 16px; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
              Explore More Jobs
            </a>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f9f9f9; padding: 24px; text-align: center; border-top: 1px solid #eaeaea;">
          <p style="margin: 0 0 16px; font-size: 14px; color: #666;">
            You're receiving this email because you subscribed to job alerts from JobMarshal.
          </p>
          <div style="margin-bottom: 16px;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/preferences" style="color: #00c951; text-decoration: none; font-size: 14px; margin: 0 10px;">Update Preferences</a>
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe" style="color: #00c951; text-decoration: none; font-size: 14px; margin: 0 10px;">Unsubscribe</a>
          </div>
          <p style="margin: 0; font-size: 13px; color: #888;">
            © ${new Date().getFullYear()} JobMarshal. All rights reserved.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}