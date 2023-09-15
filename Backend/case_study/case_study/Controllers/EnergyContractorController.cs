using case_study.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace case_study.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnergyContractorController : ControllerBase
    {
        private readonly CaseStudyContext _context;

        public EnergyContractorController(CaseStudyContext context) { _context = context; }

        [HttpGet("{id}")]
        public ActionResult<EnergyContractor> Details(int id)
        {
            //var data1 = _context.Contractors.ToList();
            // var data2 = _context.Energies.ToList();
            //var contractor = _context.Contractors.FindAsync(id);

            //if (contractor == null)
            //{
            //    return NotFound();
            //}
            //const idd = id;
                var query = from t1 in _context.Contractors
                            join t2 in _context.Energies on t1.EnergyId equals t2.EnergyId where t1.ContractorId == id
                            select new
                            {
                                t1.ContractorName,
                                t1.PhoneNumber,
                                t1.AmountInvested,
                                t1.QuantityGenerated,
                                t2.TypeOfEnergy,
                                t2.NetEnergyGenerated
                                // Include other properties as needed
                            } ;

                var result = query.ToList();

                EnergyContractor ec = new EnergyContractor();

                ec.ContractorName = result.ToArray()[0].ContractorName;

                ec.PhoneNumber = result.ToArray()[0].PhoneNumber;

                ec.AmountInvested = result.ToArray()[0].AmountInvested;

                ec.QuantityGenerated = result.ToArray()[0].QuantityGenerated;
                ec.TypeOfEnergy = result.ToArray()[0].TypeOfEnergy;

                ec.NetEnergyGenerated = result.ToArray()[0].NetEnergyGenerated;


            

            return ec;
        }

    }
    
}
