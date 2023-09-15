using System;
using System.Collections.Generic;

namespace case_study.Models;

public partial class Contractor
{
    public int ContractorId { get; set; }

    public string? ContractorName { get; set; }

    public string? ConLocation { get; set; }

    public string? Emailid { get; set; }

    public string? PhoneNumber { get; set; }

    public string? ConPassword { get; set; }

    public int? AmountInvested { get; set; }

    public int? QuantityGenerated { get; set; }

    public int? ManagerId { get; set; }

    public int? EnergyId { get; set; }

    public virtual Energy? Energy { get; set; }

    public virtual Employee? Manager { get; set; }
}
