var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddAuthentication("Bearer").AddJwtBearer(options =>
{
	options.Authority = "https://localhost:5000";
	options.Audience = "pokemonapi";
	//JwtClaimTypes
	//options.RequireHttpsMetadata = false; // handig voor localhostdingen
});

builder.Services.AddAuthorization();

builder.Services.AddCors(options =>
{
	options.AddPolicy("Angular", builder =>
	{
		builder.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader().AllowCredentials();
	});
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseCors("Angular");

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
