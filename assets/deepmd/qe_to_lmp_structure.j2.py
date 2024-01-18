import dpdata

# load cp data files
# https://docs.deepmodeling.com/projects/dpdata/en/master/formats/QECPTrajFormat.html
system = dpdata.LabeledSystem("cp", fmt="qe/cp/traj")

# convert dpdata to lammps format
# below procedure will convert input QE structure to lammps format, user may
# want to generate supercell or other complex structure for lammps calculation
system.to_lmp("system.lmp")
