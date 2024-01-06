import dpdata
import numpy as np

# https://docs.deepmodeling.com/projects/dpdata/en/master/formats/QECPTrajFormat.html
data = dpdata.LabeledSystem("generate_dft_data", fmt="qe/cp/traj")
print("Dataset contains total {0} frames".format(len(data)))

# randomly choose 20% index for validation_data
size = len(data)
size_validation = round(size * 0.2)

index_validation = np.random.choice(size, size=size_validation, replace=False)
index_training = list(set(range(size)) - set(index_validation))

data_training = data.sub_system(index_training)
data_validation = data.sub_system(index_validation)

print("Using {0} frames as training set".format(len(data_training)))
print("Using {0} frames as validation set".format(len(data_validation)))

# save training and validation sets
data_training.to_deepmd_npy("./training")
data_validation.to_deepmd_npy("./validation")
