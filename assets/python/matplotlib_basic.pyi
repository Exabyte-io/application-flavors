# -------------------------------------------------------------------------------
# This script contains a few helpful commands for basic plotting with matplotlib.
# The commented out blocks are optional suggestions and included for convenience.
# -------------------------------------------------------------------------------
import matplotlib.pyplot as plt
import matplotlib.ticker as ticker
import numpy as np


# Plot Settings
# -------------
figsize        = (6.4, 4.8) # width, height [inches]
dpi            = 100 # resolution [dots-per-inch]
fsize_title    = 16 # font size of title
fsize_axis     = 12 # font size of axis label
fsize_tick     = 12 # font size of tick label
fsize_legend   = 14 # font size of legend
x_axis_label   = None # label for x-axis
y_axis_label   = None # label for y-axis
title          = None # figure title
save_name      = "test.pdf" # output filename (with suffix), e.g. 'plot.pdf'
x_tick_spacing = 1 # custom tick spacing for x-axis (optional)
y_tick_spacing = 1 # custom tick spacing for y-axis (optional)


# Figure & axes objects
# ---------------------
fig = plt.figure(figsize=figsize, dpi=dpi)
ax  = fig.add_subplot(111)

# Example plot (REPLACE WITH YOUR
# ------------
x = np.linspace(0, 7, num=100)
y = np.sin(x)
ax.plot(x, y, "g-", zorder=3)


# Help lines
# ----------
# ax.axhline(y=0, color="0.25", linewidth=0.6, zorder=1)
# ax.axvline(x=0, color="0.25", linewidth=0.6, zorder=1)


# View limits
# -----------
# ax.set_xlim(left=None, right=None)
# ax.set_ylim(bottom=None, top=None)


# Grid lines
# ----------
# grid_style = {
#     "linestyle" : "dotted",
#     "linewidth" : 0.6,
#     "color"     : "0.25",
# }
# ax.grid(**grid_style)

# Custom tick spacing
# -------------------
# ax.xaxis.set_major_locator(ticker.MultipleLocator(x_tick_spacing))
# ax.yaxis.set_major_locator(ticker.MultipleLocator(y_tick_spacing))

# Other tick settings
# -------------------
# ax.set_xticklabels(x_tick_labels, fontdict={"fontsize": fsize_tick}, minor=False)
# ax.set_yticklabels(y_tick_labels, fontdict={"fontsize": fsize_tick}, minor=False)
# ax.tick_params(axis="both", which="major", labelsize=fsize_tick, direction="in")
# ax.tick_params(axis="x", which="major", pad=10)
# ax.tick_params(axis="x", which="minor", bottom=False, top=False)


# Axis labels
# -----------
ax.set_xlabel(x_axis_label, size=fsize_axis)
ax.set_ylabel(y_axis_label, size=fsize_axis)

# Figure title
# ------------
# ax.set_title(title, fontsize=fsize_title)

# Legend
# ------
# legend = ax.legend(prop={'size': fsize_legend})

# Save figure
# -----------
if save_name != None:
    save_fmt = save_name.split(".")[-1]
    fig.savefig(save_name, format=save_fmt, bbox_inches="tight")
