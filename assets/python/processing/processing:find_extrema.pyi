# ---------------------------------------------------------
# This script aims to determine extrema for a given array.
# Please adjust the parameters according to your data.
# ---------------------------------------------------------
import numpy as np
from scipy.signal import find_peaks
import json
from munch import Munch

# Data From Context
# -----------------
# The array can be extracted from the context by rendering the following Jinja template
{% raw %}Y = np.array({{array_from_context}}){% endraw %}  # extract array from context

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
# so that they can be read by a subsequent assignment unit
print(json.dumps(result, indent=4))
