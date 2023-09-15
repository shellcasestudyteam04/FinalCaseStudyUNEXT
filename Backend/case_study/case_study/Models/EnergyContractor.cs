namespace case_study.Models
{
    public class EnergyContractor
    {
        public string? ContractorName { get; set; }
        public string? PhoneNumber { get; set; }

        public int? AmountInvested { get; set; }

        public int? QuantityGenerated { get; set; }

        public int? NetEnergyGenerated { get; set; }

        public string? TypeOfEnergy { get; set; }
    }
}
