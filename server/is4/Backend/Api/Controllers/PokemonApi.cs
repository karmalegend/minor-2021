using Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("api/pokemon")]
    [Authorize]
    public class PokemonApi : ControllerBase
    {
        [HttpGet]
        public IEnumerable<PokemonModel> GetAll()
		{
            return new List<PokemonModel>
            {
                new PokemonModel
				{
                    Id = 4,
                    Name = "Pikachu",
                    Level = 22,
                    Type = "Electric",
                    IsShiny = false
				},
                new PokemonModel
                {
                    Id = 8,
                    Name = "Eevee",
                    Level = 41,
                    Type = "Normal",
                    IsShiny = false
                },
                new PokemonModel
                {
                    Id = 15,
                    Name = "Jolteon",
                    Level = 69,
                    Type = "Electric",
                    IsShiny = false
                }
            };
		}
    }
}
