using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace case_study.Models;

public partial class CaseStudyContext : DbContext
{
    public CaseStudyContext()
    {
    }

    public CaseStudyContext(DbContextOptions<CaseStudyContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Contractor> Contractors { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<Energy> Energies { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("host=localhost;port=5432;database=case_study;user id=postgres;password=aA1234567890");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Contractor>(entity =>
        {
            entity.HasKey(e => e.ContractorId).HasName("contractor_pkey");

            entity.ToTable("contractor");

            entity.Property(e => e.ContractorId)
                .ValueGeneratedNever()
                .HasColumnName("contractor_id");
            entity.Property(e => e.AmountInvested).HasColumnName("amount_invested");
            entity.Property(e => e.ConLocation)
                .HasMaxLength(50)
                .HasColumnName("con_location");
            entity.Property(e => e.ConPassword)
                .HasMaxLength(40)
                .HasColumnName("con_password");
            entity.Property(e => e.ContractorName)
                .HasMaxLength(40)
                .HasColumnName("contractor_name");
            entity.Property(e => e.Emailid)
                .HasMaxLength(50)
                .HasColumnName("emailid");
            entity.Property(e => e.EnergyId).HasColumnName("energy_id");
            entity.Property(e => e.ManagerId).HasColumnName("manager_id");
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(20)
                .HasColumnName("phone_number");
            entity.Property(e => e.QuantityGenerated).HasColumnName("quantity_generated");

            entity.HasOne(d => d.Energy).WithMany(p => p.Contractors)
                .HasForeignKey(d => d.EnergyId)
                .HasConstraintName("fk_energy");

            entity.HasOne(d => d.Manager).WithMany(p => p.Contractors)
                .HasForeignKey(d => d.ManagerId)
                .HasConstraintName("fk_emp");
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.EmployeeId).HasName("employee_pkey");

            entity.ToTable("employee");

            entity.Property(e => e.EmployeeId)
                .ValueGeneratedNever()
                .HasColumnName("employee_id");
            entity.Property(e => e.Department)
                .HasMaxLength(40)
                .HasColumnName("department");
            entity.Property(e => e.Emailid)
                .HasMaxLength(50)
                .HasColumnName("emailid");
            entity.Property(e => e.EmpPassword)
                .HasMaxLength(40)
                .HasColumnName("emp_password");
            entity.Property(e => e.EmployeeName)
                .HasMaxLength(50)
                .HasColumnName("employee_name");
            entity.Property(e => e.EnergyId).HasColumnName("energy_id");
            entity.Property(e => e.PhoneNo)
                .HasMaxLength(20)
                .HasColumnName("phone_no");

            entity.HasOne(d => d.Energy).WithMany(p => p.Employees)
                .HasForeignKey(d => d.EnergyId)
                .HasConstraintName("fk_energy1");
        });

        modelBuilder.Entity<Energy>(entity =>
        {
            entity.HasKey(e => e.EnergyId).HasName("energy_pkey");

            entity.ToTable("energy");

            entity.Property(e => e.EnergyId)
                .ValueGeneratedNever()
                .HasColumnName("energy_id");
            entity.Property(e => e.NetEnergyGenerated).HasColumnName("net_energy_generated");
            entity.Property(e => e.TotalAmountInvested).HasColumnName("total_amount_invested");
            entity.Property(e => e.TypeOfEnergy)
                .HasMaxLength(40)
                .HasColumnName("type_of_energy");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
