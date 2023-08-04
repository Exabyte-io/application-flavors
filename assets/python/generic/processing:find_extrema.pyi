# ----------------------------------------------------------- #
# This script aims to determine extrema for a given array.    #
# Please adjust the parameters according to your data.        #
# Note: This template expects the array to be defined in the  #
# context as 'array_from_context' (see details below).        #
# ----------------------------------------------------------- #
import numpy as np
from scipy.signal import find_peaks
import json
from munch import Munch

# Data From Context
# -----------------
# The array 'array_from_context' is a 1D list (float or int) that has to be defined in
# a preceding assignment unit in order to be extracted from the context.
# Example: [0.0, 1.0, 4.0, 3.0]
# Upon rendering the following Jinja template the extracted array will be inserted.
{% raw %}Y = np.array({{array_from_context}}){% endraw %}

# Settings
# --------
prominence = 0.3  # required prominence in the unit of the data array

# Find Extrema
# ------------
max_indices, _ = find_peaks(Y, prominence=prominence)
min_indices, _ = find_peaks(-1 * Y, prominence=prominence)

result = {
    "maxima": Y[max_indices].tolist(),
    "minima": Y[min_indices].tolist(),
}

# print final values to standard output (STDOUT),
# so that they can be read by a subsequent assignment unit (using value=STDOUT)
print(json.dumps(result, indent=4))
