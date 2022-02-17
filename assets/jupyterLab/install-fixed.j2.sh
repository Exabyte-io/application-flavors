#!/bin/bash

# ---------------------------------------------------------------- #
#                                                                  #
#  JUPYTER LAB INSTALLATION SCRIPT FOR EXABYTE.IO PLATFORM.        #
#                                                                  #
#  DO NOT MODIFY THIS FILE! ADJUST "configure.sh" SCRIPT           #
#  IF YOU NEED TO CUSTOMIZE YOUR JUPYTER LAB ENVIRONMENT.          #
#                                                                  #
# ---------------------------------------------------------------- #

export PYTHONDONTWRITEBYTECODE=1

# Load the default python environment for jupyterlab
# TODO: fill in the release automatically
scratchdir="/scratch/$USER/$PBS_JOBID"
envdir="$scratchdir/.env"
jupyterlabdir="/export/compute/software/jupyterlab-env-2021.12.23/"

# activate the virtual environment.
cd "$jupyterlabdir"
source "bin/activate"

# Create a self-signed certificate to make communication with Jupyter Lab secure
SUBJECT="/C=US/ST=CA/L=San Francisco/O=Exabyte Inc./CN=Jupyter Lab"
openssl req -new -newkey rsa:4096 -days 30 -nodes -x509 -subj "$SUBJECT" -keyout key.pem -out cert.pem

# execute the configuration script provided by user
source ./configure.sh

# Run Jupyter Lab on dropbox to read/write files
cd /dropbox/{% raw %}{{ JOB_OWNER_SLUG }}{% endraw %}
if [ $? -ne 0 ]; then
    exit 1
fi

# Start the Jupyter notebook
jupyter notebook --config {% raw %}{{ JOB_WORK_DIR }}/config.py{% endraw %}
