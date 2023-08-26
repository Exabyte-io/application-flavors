/* eslint-disable */
module.exports = {applicationTree: {"espresso":{"average.x":{"monitors":["standard_output"],"results":["average_potential_profile"],"flavors":{"average":{"input":[{"name":"average.in"}],"results":[],"monitors":["standard_output"],"applicationName":"espresso","executableName":"average.x"},"average_potential":{"input":[{"name":"average.in"}],"results":["average_potential_profile"],"monitors":["standard_output"],"applicationName":"espresso","executableName":"average.x"}}},"bands.x":{"monitors":["standard_output"],"results":["band_structure"],"flavors":{"bands":{"input":[{"name":"bands.in"}],"results":["band_structure"],"monitors":["standard_output"],"applicationName":"espresso","executableName":"bands.x"}}},"dos.x":{"monitors":["standard_output"],"results":["density_of_states"],"flavors":{"dos":{"input":[{"name":"dos.in"}],"results":["density_of_states"],"monitors":["standard_output"],"applicationName":"espresso","executableName":"dos.x"}}},"dynmat.x":{"monitors":["standard_output"],"results":[],"flavors":{"dynmat":{"input":[{"name":"dynmat_grid.in"}],"results":[],"monitors":["standard_output"],"applicationName":"espresso","executableName":"dynmat.x"}}},"gw.x":{"monitors":["standard_output"],"results":["band_structure","fermi_energy","band_gaps"],"flavors":{"gw_bands_plasmon_pole":{"input":[{"name":"gw_bands_plasmon_pole.in"}],"results":["band_structure","fermi_energy","band_gaps"],"monitors":["standard_output"],"applicationName":"espresso","executableName":"gw.x"},"gw_bands_full_frequency":{"input":[{"name":"gw_bands_full_frequency.in"}],"results":["band_structure","fermi_energy","band_gaps"],"monitors":["standard_output"],"applicationName":"espresso","executableName":"gw.x"}}},"matdyn.x":{"monitors":["standard_output"],"results":["phonon_dos","phonon_dispersions"],"flavors":{"matdyn_grid":{"input":[{"name":"matdyn_grid.in"}],"monitors":["standard_output"],"results":["phonon_dos"],"applicationName":"espresso","executableName":"matdyn.x"},"matdyn_path":{"input":[{"name":"matdyn_path.in"}],"monitors":["standard_output"],"results":["phonon_dispersions"],"applicationName":"espresso","executableName":"matdyn.x"}}},"neb.x":{"monitors":["standard_output"],"results":["reaction_energy_barrier","reaction_energy_profile"],"flavors":{"neb":{"isMultiMaterial":true,"input":[{"name":"neb.in"}],"results":["reaction_energy_barrier","reaction_energy_profile"],"monitors":["standard_output"],"applicationName":"espresso","executableName":"neb.x"}}},"ph.x":{"monitors":["standard_output"],"results":["phonon_dos","phonon_dispersions","zero_point_energy"],"flavors":{"ph_path":{"input":[{"name":"ph_path.in"}],"results":["phonon_dispersions"],"monitors":["standard_output"],"applicationName":"espresso","executableName":"ph.x"},"ph_grid":{"input":[{"name":"ph_grid.in"}],"results":["phonon_dos"],"monitors":["standard_output"],"applicationName":"espresso","executableName":"ph.x"},"ph_gamma":{"input":[{"name":"ph_gamma.in"}],"results":["zero_point_energy"],"monitors":["standard_output"],"applicationName":"espresso","executableName":"ph.x"},"ph_init_qpoints":{"input":[{"name":"ph_init_qpoints.in"}],"results":[],"monitors":["standard_output"],"applicationName":"espresso","executableName":"ph.x"},"ph_grid_restart":{"input":[{"name":"ph_grid_restart.in"}],"results":[],"monitors":["standard_output"],"applicationName":"espresso","executableName":"ph.x"},"ph_single_irr_qpt":{"input":[{"name":"ph_single_irr_qpt.in"}],"results":[],"monitors":["standard_output"],"applicationName":"espresso","executableName":"ph.x"}}},"pp.x":{"monitors":["standard_output"],"results":[],"flavors":{"pp_density":{"input":[{"name":"pp_density.in"}],"results":[],"monitors":["standard_output"],"applicationName":"espresso","executableName":"pp.x"},"pp_electrostatic_potential":{"input":[{"name":"pp_electrostatic_potential.in"}],"results":[],"monitors":["standard_output"],"applicationName":"espresso","executableName":"pp.x"}}},"projwfc.x":{"monitors":["standard_output"],"results":["density_of_states"],"flavors":{"projwfc":{"input":[{"name":"projwfc.in"}],"results":["density_of_states"],"monitors":["standard_output"],"applicationName":"espresso","executableName":"projwfc.x"}}},"pw.x":{"isDefault":true,"hasAdvancedComputeOptions":true,"postProcessors":["remove_non_zero_weight_kpoints"],"monitors":["standard_output","convergence_ionic","convergence_electronic"],"results":["atomic_forces","band_gaps","charge_density_profile","density_of_states","fermi_energy","final_structure","magnetic_moments","potential_profile","pressure","reaction_energy_barrier","reaction_energy_profile","stress_tensor","total_energy","total_energy_contributions","total_force"],"flavors":{"pw_scf":{"isDefault":true,"input":[{"name":"pw_scf.in"}],"results":["atomic_forces","fermi_energy","pressure","stress_tensor","total_energy","total_energy_contributions","total_force"],"monitors":["standard_output","convergence_electronic"],"applicationName":"espresso","executableName":"pw.x"},"pw_scf_bands_hse":{"input":[{"name":"pw_scf_bands_hse.in"}],"results":["total_energy","total_energy_contributions","pressure","fermi_energy","atomic_forces","total_force","stress_tensor"],"monitors":["standard_output","convergence_electronic"],"applicationName":"espresso","executableName":"pw.x"},"pw_scf_hse":{"input":[{"name":"pw_scf_hse.in"}],"results":["atomic_forces","band_gaps","fermi_energy","pressure","stress_tensor","total_energy","total_energy_contributions","total_force"],"monitors":["standard_output","convergence_electronic"],"applicationName":"espresso","executableName":"pw.x"},"pw_scf_dft_u":{"input":[{"name":"pw_scf_dft_u.in"}],"results":["atomic_forces","band_gaps","fermi_energy","pressure","stress_tensor","total_energy","total_energy_contributions","total_force"],"monitors":["standard_output","convergence_electronic"],"applicationName":"espresso","executableName":"pw.x","supportedApplicationVersions":["7.2"]},"pw_esm":{"input":[{"name":"pw_esm.in"}],"results":["total_energy","total_energy_contributions","pressure","fermi_energy","atomic_forces","total_force","stress_tensor","potential_profile","charge_density_profile"],"monitors":["standard_output","convergence_electronic"],"applicationName":"espresso","executableName":"pw.x"},"pw_esm_relax":{"input":[{"name":"pw_esm_relax.in"}],"results":["total_energy","total_energy_contributions","pressure","fermi_energy","atomic_forces","total_force","stress_tensor","potential_profile","charge_density_profile"],"monitors":["standard_output","convergence_electronic"],"applicationName":"espresso","executableName":"pw.x"},"pw_nscf":{"input":[{"name":"pw_nscf.in"}],"results":["fermi_energy","band_gaps"],"monitors":["standard_output"],"applicationName":"espresso","executableName":"pw.x"},"pw_bands":{"input":[{"name":"pw_bands.in"}],"monitors":["standard_output"],"applicationName":"espresso","executableName":"pw.x"},"pw_relax":{"input":[{"name":"pw_relax.in"}],"monitors":["standard_output","convergence_electronic","convergence_ionic"],"results":["total_energy","fermi_energy","pressure","atomic_forces","total_force","stress_tensor","final_structure"],"applicationName":"espresso","executableName":"pw.x"},"pw_vc-relax":{"input":[{"name":"pw_vc_relax.in"}],"monitors":["standard_output","convergence_electronic","convergence_ionic"],"results":["total_energy","fermi_energy","pressure","atomic_forces","total_force","stress_tensor","final_structure"],"applicationName":"espresso","executableName":"pw.x"},"pw_scf_kpt_conv":{"input":[{"name":"pw_scf_kpt_conv.in"}],"results":["total_energy","fermi_energy","pressure","atomic_forces","total_force","stress_tensor"],"monitors":["standard_output","convergence_electronic"],"applicationName":"espresso","executableName":"pw.x"}}},"q2r.x":{"monitors":["standard_output"],"results":[],"flavors":{"q2r":{"input":[{"name":"q2r.in"}],"results":[],"monitors":["standard_output"],"applicationName":"espresso","executableName":"q2r.x"}}},"hp.x":{"monitors":["standard_output"],"results":[],"flavors":{"hp":{"input":[{"name":"hp.in"}],"results":[],"monitors":["standard_output"],"applicationName":"espresso","executableName":"hp.x"}},"supportedApplicationVersions":["7.0","7.2"]}},"jupyterLab":{"jupyter":{"isDefault":true,"monitors":["standard_output","jupyter_notebook_endpoint"],"results":[],"flavors":{"notebook":{"isDefault":true,"input":[{"name":"requirements.txt","templateName":"requirements.txt"}],"monitors":["standard_output","jupyter_notebook_endpoint"],"applicationName":"jupyterLab","executableName":"jupyter"}}}},"exabyteml":{"score":{"isDefault":false,"monitors":["standard_output"],"results":["predicted_properties"],"flavors":{"score":{"isDefault":true,"input":[],"monitors":["standard_output"],"applicationName":"exabyteml","executableName":"score"}}},"train":{"isDefault":true,"monitors":["standard_output"],"results":["workflow:ml_predict"],"flavors":{"train":{"isDefault":true,"input":[],"monitors":["standard_output"],"applicationName":"exabyteml","executableName":"train"}}}},"nwchem":{"nwchem":{"isDefault":true,"hasAdvancedComputeOptions":false,"postProcessors":["error_handler"],"monitors":["standard_output"],"results":["total_energy","total_energy_contributions"],"flavors":{"nwchem_total_energy":{"isDefault":true,"input":[{"name":"nwchem_total_energy.inp"}],"results":["total_energy","total_energy_contributions"],"monitors":["standard_output"],"applicationName":"nwchem","executableName":"nwchem"}}}},"python":{"python":{"isDefault":true,"monitors":["standard_output"],"results":["file_content","workflow:pyml_predict"],"flavors":{"hello_world":{"isDefault":true,"input":[{"name":"script.py","templateName":"hello_world.py"},{"name":"requirements.txt"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"espresso_xml_get_qpt_irr":{"input":[{"name":"espresso_xml_get_qpt_irr.py"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"espresso_extract_kpoints":{"input":[{"name":"espresso_extract_kpoints.py"},{"name":"requirements.txt","templateName":"requirements_empty.txt"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"generic:post_processing:plot:matplotlib":{"input":[{"name":"plot.py","templateName":"matplotlib_basic.py"},{"name":"requirements.txt","templateName":"processing_requirements.txt"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"generic:processing:find_extrema:scipy":{"input":[{"name":"find_extrema.py","templateName":"find_extrema.py"},{"name":"requirements.txt","templateName":"processing_requirements.txt"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:setup_variables_packages":{"input":[{"name":"settings.py","templateName":"pyml_settings.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:custom":{"input":[{"name":"pyml_custom.py","templateName":"pyml_custom.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:data_input:read_csv:pandas":{"input":[{"name":"data_input_read_csv_pandas.py","templateName":"data_input_read_csv_pandas.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:data_input:train_test_split:sklearn":{"input":[{"name":"data_input_train_test_split_sklearn.py","templateName":"data_input_train_test_split_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:pre_processing:min_max_scaler:sklearn":{"input":[{"name":"pre_processing_min_max_sklearn.py","templateName":"pre_processing_min_max_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:pre_processing:remove_duplicates:pandas":{"input":[{"name":"pre_processing_remove_duplicates_pandas.py","templateName":"pre_processing_remove_duplicates_pandas.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:pre_processing:remove_missing:pandas":{"input":[{"name":"pre_processing_remove_missing_pandas.py","templateName":"pre_processing_remove_missing_pandas.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:pre_processing:standardization:sklearn":{"input":[{"name":"pre_processing_standardization_sklearn.py","templateName":"pre_processing_standardization_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:model:adaboosted_trees_regression:sklearn":{"input":[{"name":"model_adaboosted_trees_regression_sklearn.py","templateName":"model_adaboosted_trees_regression_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"monitors":["standard_output"],"results":["workflow:pyml_predict"],"applicationName":"python","executableName":"python"},"pyml:model:bagged_trees_regression:sklearn":{"input":[{"name":"model_bagged_trees_regression_sklearn.py","templateName":"model_bagged_trees_regression_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["workflow:pyml_predict"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:model:gradboosted_trees_regression:sklearn":{"input":[{"name":"model_gradboosted_trees_regression_sklearn.py","templateName":"model_gradboosted_trees_regression_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["workflow:pyml_predict"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:model:extreme_gradboosted_trees_regression:sklearn":{"input":[{"name":"model_extreme_gradboosted_trees_regression_sklearn.py","templateName":"model_extreme_gradboosted_trees_regression_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["workflow:pyml_predict"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:model:k_means_clustering:sklearn":{"input":[{"name":"model_k_means_clustering_sklearn.py","templateName":"model_k_means_clustering_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["workflow:pyml_predict"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:model:kernel_ridge_regression:sklearn":{"input":[{"name":"model_kernel_ridge_regression_sklearn.py","templateName":"model_kernel_ridge_regression_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["workflow:pyml_predict"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:model:lasso_regression:sklearn":{"input":[{"name":"model_lasso_regression_sklearn.py","templateName":"model_lasso_regression_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["workflow:pyml_predict"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:model:multilayer_perceptron:sklearn":{"input":[{"name":"model_mlp_sklearn.py","templateName":"model_mlp_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["workflow:pyml_predict"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:model:random_forest_classification:sklearn":{"input":[{"name":"model_random_forest_classification_sklearn.py","templateName":"model_random_forest_classification_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["workflow:pyml_predict"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:model:gradboosted_trees_classification:sklearn":{"input":[{"name":"model_gradboosted_trees_classification_sklearn.py","templateName":"model_gradboosted_trees_classification_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["workflow:pyml_predict"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:model:extreme_gradboosted_trees_classification:sklearn":{"input":[{"name":"model_extreme_gradboosted_trees_classification_sklearn.py","templateName":"model_extreme_gradboosted_trees_classification_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["workflow:pyml_predict"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:model:random_forest_regression:sklearn":{"input":[{"name":"model_random_forest_regression_sklearn.py","templateName":"model_random_forest_regression_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["workflow:pyml_predict"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:model:ridge_regression:sklearn":{"input":[{"name":"model_ridge_regression_sklearn.py","templateName":"model_ridge_regression_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["workflow:pyml_predict"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:post_processing:parity_plot:matplotlib":{"input":[{"name":"post_processing_parity_plot_matplotlib.py","templateName":"post_processing_parity_plot_matplotlib.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["file_content"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:post_processing:pca_2d_clusters:matplotlib":{"input":[{"name":"post_processing_pca_2d_clusters_matplotlib.py","templateName":"post_processing_pca_2d_clusters_matplotlib.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["file_content"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"},"pyml:post_processing:roc_curve:sklearn":{"input":[{"name":"post_processing_roc_curve_sklearn.py","templateName":"post_processing_roc_curve_sklearn.py"},{"name":"requirements.txt","templateName":"pyml_requirements.txt"}],"results":["file_content"],"monitors":["standard_output"],"applicationName":"python","executableName":"python"}}}},"shell":{"sh":{"isDefault":true,"monitors":["standard_output"],"results":["atomic_forces","band_gaps","band_structure","density_of_states","fermi_energy","phonon_dispersions","phonon_dos","pressure","stress_tensor","total_energy","total_energy_contributions","total_force","zero_point_energy","final_structure","magnetic_moments","reaction_energy_barrier","reaction_energy_profile","potential_profile","charge_density_profile"],"flavors":{"hello_world":{"isDefault":true,"input":[{"name":"hello_world.sh"}],"monitors":["standard_output"],"applicationName":"shell","executableName":"sh"},"job_espresso_pw_scf":{"input":[{"name":"job_espresso_pw_scf.sh"}],"monitors":["standard_output"],"applicationName":"shell","executableName":"sh"},"espresso_link_outdir_save":{"input":[{"name":"espresso_link_outdir_save.sh"}],"monitors":["standard_output"],"applicationName":"shell","executableName":"sh"},"espresso_collect_dynmat":{"input":[{"name":"espresso_collect_dynmat.sh"}],"monitors":["standard_output"],"applicationName":"shell","executableName":"sh"},"bash_vasp_prepare_neb_images":{"isMultiMaterial":true,"input":[{"name":"bash_vasp_prepare_neb_images.sh"}],"monitors":["standard_output"],"applicationName":"shell","executableName":"sh"}}}},"vasp":{"vasp":{"isDefault":true,"postProcessors":["error_handler","prepare_restart","remove_non_zero_weight_kpoints"],"monitors":["standard_output","convergence_ionic","convergence_electronic"],"results":["atomic_forces","band_gaps","band_structure","density_of_states","fermi_energy","pressure","stress_tensor","total_energy","total_energy_contributions","total_force","zero_point_energy","final_structure","magnetic_moments","reaction_energy_barrier","reaction_energy_profile","potential_profile","charge_density_profile"],"flavors":{"vasp":{"isDefault":true,"input":[{"name":"INCAR"},{"name":"KPOINTS"},{"name":"POSCAR"}],"results":["total_energy","total_energy_contributions","pressure","fermi_energy","atomic_forces","total_force","stress_tensor"],"monitors":["standard_output","convergence_electronic"],"applicationName":"vasp","executableName":"vasp"},"vasp_bands":{"input":[{"name":"INCAR","templateName":"INCAR_BANDS"},{"name":"KPOINTS","templateName":"KPOINTS_BANDS"},{"name":"POSCAR","templateName":""}],"results":["band_structure"],"monitors":["standard_output","convergence_electronic"],"applicationName":"vasp","executableName":"vasp"},"vasp_nscf":{"input":[{"name":"INCAR","templateName":"INCAR_BANDS"},{"name":"KPOINTS","templateName":"KPOINTS"},{"name":"POSCAR","templateName":"POSCAR"}],"results":["band_gaps","fermi_energy"],"monitors":["standard_output","convergence_electronic"],"applicationName":"vasp","executableName":"vasp"},"vasp_hse":{"isDefault":false,"input":[{"name":"INCAR","templateName":"INCAR_HSE"},{"name":"KPOINTS"},{"name":"POSCAR"}],"results":["total_energy","total_energy_contributions","pressure","fermi_energy","atomic_forces","total_force","stress_tensor"],"monitors":["standard_output","convergence_electronic"],"applicationName":"vasp","executableName":"vasp"},"vasp_bands_hse":{"isDefault":false,"input":[{"name":"INCAR","templateName":"INCAR_BANDS_HSE"},{"name":"KPOINTS","templateName":"KPOINTS_BANDS"},{"name":"POSCAR","templateName":""}],"results":["band_structure"],"monitors":["standard_output","convergence_electronic"],"applicationName":"vasp","executableName":"vasp"},"vasp_nscf_hse":{"isDefault":false,"input":[{"name":"INCAR","templateName":"INCAR_BANDS_HSE"},{"name":"KPOINTS","templateName":"KPOINTS"},{"name":"POSCAR","templateName":"POSCAR"}],"results":["band_gaps","fermi_energy"],"monitors":["standard_output","convergence_electronic"],"applicationName":"vasp","executableName":"vasp"},"vasp_relax":{"input":[{"name":"INCAR","templateName":"INCAR_RELAX"},{"name":"KPOINTS","templateName":"KPOINTS"},{"name":"POSCAR","templateName":"POSCAR"}],"results":["total_energy","atomic_forces","fermi_energy","pressure","stress_tensor","total_force","final_structure"],"monitors":["standard_output","convergence_electronic","convergence_ionic"],"postProcessors":["prepare_restart"],"applicationName":"vasp","executableName":"vasp"},"vasp_vc_relax":{"input":[{"name":"INCAR","templateName":"INCAR_VC_RELAX"},{"name":"KPOINTS","templateName":"KPOINTS"},{"name":"POSCAR","templateName":"POSCAR"}],"results":["total_energy","atomic_forces","fermi_energy","pressure","stress_tensor","total_force","final_structure"],"monitors":["standard_output","convergence_electronic","convergence_ionic"],"postProcessors":["prepare_restart"],"applicationName":"vasp","executableName":"vasp"},"vasp_zpe":{"input":[{"name":"INCAR","templateName":"INCAR_ZPE"},{"name":"KPOINTS","templateName":"KPOINTS"},{"name":"POSCAR","templateName":"POSCAR"}],"results":["total_energy","fermi_energy","pressure","atomic_forces","stress_tensor","total_force","zero_point_energy"],"monitors":["standard_output","convergence_electronic","convergence_ionic"],"applicationName":"vasp","executableName":"vasp"},"vasp_kpt_conv":{"input":[{"name":"INCAR","templateName":"INCAR"},{"name":"KPOINTS","templateName":"KPOINTS_CONV"},{"name":"POSCAR","templateName":"POSCAR"}],"results":["total_energy","total_energy_contributions","pressure","fermi_energy","atomic_forces","total_force","stress_tensor"],"monitors":["standard_output","convergence_electronic"],"applicationName":"vasp","executableName":"vasp"},"vasp_vc_relax_conv":{"input":[{"name":"INCAR","templateName":"INCAR_VC_RELAX"},{"name":"KPOINTS","templateName":"KPOINTS_CONV"},{"name":"POSCAR","templateName":"POSCAR"}],"results":["total_energy","total_energy_contributions","pressure","fermi_energy","atomic_forces","total_force","stress_tensor"],"monitors":["standard_output","convergence_electronic","convergence_ionic"],"applicationName":"vasp","executableName":"vasp"},"vasp_neb":{"isMultiMaterial":true,"input":[{"name":"INCAR","templateName":"INCAR_NEB"},{"name":"KPOINTS","templateName":"KPOINTS"}],"results":["reaction_energy_barrier","reaction_energy_profile"],"monitors":["standard_output"],"applicationName":"vasp","executableName":"vasp"},"vasp_neb_initial":{"isMultiMaterial":true,"input":[{"name":"INCAR","templateName":"INCAR_NEB_INITIAL_FINAL"},{"name":"KPOINTS"},{"name":"POSCAR","templateName":"POSCAR_NEB_INITIAL"}],"results":["total_energy","total_energy_contributions","pressure","fermi_energy","atomic_forces","total_force","stress_tensor"],"monitors":["standard_output","convergence_electronic"],"applicationName":"vasp","executableName":"vasp"},"vasp_neb_final":{"isMultiMaterial":true,"input":[{"name":"INCAR","templateName":"INCAR_NEB_INITIAL_FINAL"},{"name":"KPOINTS"},{"name":"POSCAR","templateName":"POSCAR_NEB_FINAL"}],"results":["total_energy","total_energy_contributions","pressure","fermi_energy","atomic_forces","total_force","stress_tensor"],"monitors":["standard_output","convergence_electronic"],"applicationName":"vasp","executableName":"vasp"}}}}}}
