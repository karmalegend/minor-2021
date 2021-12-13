using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Models
{
    public class PokemonModel
    {
		public int Id { get; set; }

		public string Name { get; set; }

		public string Type { get; set; }

		public byte Level { get; set; }

		public bool IsShiny { get; set; }
	}
}
