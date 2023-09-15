using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using case_study.Models;

namespace case_study.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnergiesController : ControllerBase
    {
        private readonly CaseStudyContext _context;

        public EnergiesController(CaseStudyContext context)
        {
            _context = context;
        }

        // GET: api/Energies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Energy>>> GetEnergies()
        {
          if (_context.Energies == null)
          {
              return NotFound();
          }
            return await _context.Energies.ToListAsync();
        }

        // GET: api/Energies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Energy>> GetEnergy(int id)
        {
          if (_context.Energies == null)
          {
              return NotFound();
          }
            var energy = await _context.Energies.FindAsync(id);

            if (energy == null)
            {
                return NotFound();
            }

            return energy;
        }

        // PUT: api/Energies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEnergy(int id, Energy energy)
        {
            if (id != energy.EnergyId)
            {
                return BadRequest();
            }

            _context.Entry(energy).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EnergyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Energies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Energy>> PostEnergy(Energy energy)
        {
          if (_context.Energies == null)
          {
              return Problem("Entity set 'CaseStudyContext.Energies'  is null.");
          }
            _context.Energies.Add(energy);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EnergyExists(energy.EnergyId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEnergy", new { id = energy.EnergyId }, energy);
        }

        // DELETE: api/Energies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEnergy(int id)
        {
            if (_context.Energies == null)
            {
                return NotFound();
            }
            var energy = await _context.Energies.FindAsync(id);
            if (energy == null)
            {
                return NotFound();
            }

            _context.Energies.Remove(energy);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EnergyExists(int id)
        {
            return (_context.Energies?.Any(e => e.EnergyId == id)).GetValueOrDefault();
        }
    }
}
