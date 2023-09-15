using case_study.Models;
using Microsoft.EntityFrameworkCore;

namespace case_study
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<CaseStudyContext>(val => val.UseNpgsql("host=localhost;port=5432;database=case_study;user id=postgres;password=aA1234567890"));
            builder.Services.AddCors(policy => policy.AddPolicy("policyName", pol =>

            {

                pol.AllowAnyHeader();

                pol.AllowAnyMethod();

                pol.AllowAnyOrigin();

            }));
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            //app.UseExceptionHandler("/Home/Error");

            app.UseHttpsRedirection();

            app.UseAuthorization();
            app.UseCors("policyName");


            app.MapControllers();

            app.Run();
        }
    }
}