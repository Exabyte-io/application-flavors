const allowed_results = {
    atomic_forces: "atomic_forces",
    band_gaps: "band_gaps",
    Band_structure: "band_structure",
    density_of_states: "density_of_states",
    fermi_energy: "fermi_energy",
    phonon_dispersions: "phonon_dispersions",
    phonon_dos: "phonon_dos",
    pressure: "pressure",
    stress_tensor: "stress_tensor",
    total_energy: "total_energy",
    total_energy_contributions: "total_energy_contributions",
    total_force: "total_force",
    zero_point_energy: "zero_point_energy",
    final_structure: "final_structure",
    magnetic_moment: "magnetic_moments",
    reaction_energy_barrier: "reaction_energy_barrier",
    reaction_energy_profile: "reaction_energy_profile",
    potential_profile: "potential_profile",
    charge_density_profile: "charge_density_profile",
    hubbard_u: "hubbard_u",
    hubbard_v_nn: "hubbard_v_nn",
    hubbard_v: "hubbard_v",
} as const;

export default allowed_results;
export type AllowedResults = typeof allowed_results[keyof typeof allowed_results];
