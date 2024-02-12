const allowedResults = [
    "atomic_forces",
    "band_gaps",
    "band_structure",
    "density_of_states",
    "fermi_energy",
    "phonon_dispersions",
    "phonon_dos",
    "pressure",
    "stress_tensor",
    "total_energy",
    "total_energy_contributions",
    "total_force",
    "zero_point_energy",
    "final_structure",
    "magnetic_moments",
    "reaction_energy_barrier",
    "reaction_energy_profile",
    "potential_profile",
    "charge_density_profile",
    "hubbard_u",
    "hubbard_v_nn",
    "hubbard_v",
] as  const;

export default allowedResults;

export type AllowedResults = typeof allowedResults[number];
