# -------------------------------------------------------------------------------
# This script contains a few helpful commands for basic plotting with matplotlib.
# The commented out blocks are optional suggestions and included for convenience.
# -------------------------------------------------------------------------------
import matplotlib.pyplot as plt
import matplotlib.ticker as ticker
import numpy as np


# Plot Settings
# -------------
figure_size      = (6.4, 4.8)  # width, height [inches]
dpi              = 100  # resolution [dots-per-inch]
font_size_title  = 16  # font size of title
font_size_axis   = 12  # font size of axis label
font_size_tick   = 12  # font size of tick label
font_size_legend = 14  # font size of legend
x_axis_label     = None  # label for x-axis
y_axis_label     = None  # label for y-axis
title            = None  # figure title
show_legend      = False  # whether to show legend
save_name        = "plot.pdf" # output filename (with suffix), e.g. 'plot.pdf'
x_view_limits    = {"left": None, "right": None}  # view limits for x-axis
y_view_limits    = {"top": None, "bottom": None}  # view limits for y-axis
x_tick_spacing   = None  # custom tick spacing for x-axis (optional)
y_tick_spacing   = None  # custom tick spacing for y-axis (optional)
x_tick_labels    = None  # custom tick labels for x-axis (optional)
y_tick_labels    = None  # custom tick labels for y-axis (optional)


# Figure & axes objects
# ---------------------
fig = plt.figure(figsize=figure_size, dpi=dpi)
ax  = fig.add_subplot(111)

# Example plot (REPLACE ACCORDINGLY)
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
ax.set_xlim(**x_view_limits)
ax.set_ylim(**y_view_limits)


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

# Custom tick labels
# ------------------
if x_tick_labels is not None:
    ax.set_xticklabels(x_tick_labels, fontdict={"fontsize": font_size_tick}, minor=False)
if y_tick_labels is not None:
    ax.set_yticklabels(y_tick_labels, fontdict={"fontsize": font_size_tick}, minor=False)

# Other tick settings
# -------------------
# ax.tick_params(axis="both", which="major", labelsize=font_size_tick, direction="in")
# ax.tick_params(axis="x", which="major", pad=10)
# ax.tick_params(axis="x", which="minor", bottom=False, top=False)


# Axis labels
# -----------
if x_axis_label is not None:
    ax.set_xlabel(x_axis_label, size=font_size_axis)
if y_axis_label is not None:
    ax.set_ylabel(y_axis_label, size=font_size_axis)

# Figure title
# ------------
if title is not None:
    ax.set_title(title, fontsize=font_size_title)

# Legend
# ------
if show_legend:
    ax.legend(prop={'size': font_size_legend})

# Save figure
# -----------
if save_name is not None:
    save_format = save_name.split(".")[-1]
    fig.savefig(save_name, format=save_format, bbox_inches="tight")
