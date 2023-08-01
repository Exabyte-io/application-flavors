import re
import json

double_regex = r'[-+]?\d*\.\d+(?:[eE][-+]?\d+)?'
regex = r"\s+k\(\s+\d*\)\s+=\s+\(\s+({0})\s+({0})\s+({0})\),\s+wk\s+=\s+({0}).+?\n".format(double_regex)

with open("pw_scf.out") as f:
    text = f.read()

pattern = re.compile(regex, re.I | re.MULTILINE)
match = pattern.findall(text[text.rfind(" cryst. coord."):])
kpoints = [{"coordinates": list(map(float, m[:3])), "weight": float(m[3])} for m in match]
print(json.dumps({"name": "KPOINTS", "value": kpoints, "scope": "global"}, indent=4))
