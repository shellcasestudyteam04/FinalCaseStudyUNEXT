using case_study.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace case_study.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Login1Controller : ControllerBase
    {
        private readonly CaseStudyContext _context;

        public Login1Controller(CaseStudyContext context) { _context = context; }



        [HttpPost("login1")]

        public IActionResult Login([FromBody] LoginRequest request)

        {
            // Implement your authentication logic here

            int username = request.Username;

            string password = request.Password;





            if (IsValidUser(username, password).Result)

            {

                // Authentication successful

                // Generate and return a token or user information

                var token = GenerateToken(username);

                return Ok(new { token });

            }






            // Authentication failed

            return Unauthorized();


        }





        private async Task<bool> IsValidUser(int username, string password)

        {

            var user = await _context.Employees.FirstOrDefaultAsync(u => u.EmployeeId == username);

            if (user != null)

            {

                if (password.Equals(user.EmpPassword)) { return true; }

            }

            return false;
        }





        private static string GenerateToken(int username)

        {

            string str = "SQH61bHLM1AGHViVDXxO0ikONSRPXxwEXI3nJ+u7m+bNJB+nNxy2nbqoqVMOFXS5";

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(str)); // Replace with your secret key

            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);





            var claims = new[]

            {

            new Claim(JwtRegisteredClaimNames.Sub, username.ToString()),

            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()), // Unique identifier for the token

            new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64)

        };





            var token = new JwtSecurityToken(

                issuer: "Team Rocket",    // Replace with your issuer

                audience: "shell", // Replace with your audience

                claims: claims,

                expires: DateTime.UtcNow.AddHours(1), // Token expiration time

                signingCredentials: credentials

            );





            var tokenHandler = new JwtSecurityTokenHandler();

            return tokenHandler.WriteToken(token);

        }

    }
}

