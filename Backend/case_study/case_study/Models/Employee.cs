using System;
using System.Collections.Generic;

namespace case_study.Models;

public partial class Employee
{
    public int EmployeeId { get; set; }

    public string? EmployeeName { get; set; }

    public string? Emailid { get; set; }

    public string? EmpPassword { get; set; }

    public string? PhoneNo { get; set; }

    public string? Department { get; set; }

    public int? EnergyId { get; set; }

    public virtual ICollection<Contractor> Contractors { get; set; } = new List<Contractor>();

    public virtual Energy? Energy { get; set; }
}
