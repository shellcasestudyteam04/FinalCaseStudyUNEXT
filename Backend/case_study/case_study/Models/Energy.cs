using System;
using System.Collections.Generic;

namespace case_study.Models;

public partial class Energy
{
    public int EnergyId { get; set; }

    public string? TypeOfEnergy { get; set; }

    public int? NetEnergyGenerated { get; set; }

    public int? TotalAmountInvested { get; set; }

    public virtual ICollection<Contractor> Contractors { get; set; } = new List<Contractor>();

    public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();
}
