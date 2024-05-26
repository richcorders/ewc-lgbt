# SPDX-FileCopyrightText: 2024 winston <hey@winston.sh>
#
# SPDX-License-Identifier: CC0-1.0

{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  # See full reference at https://devenv.sh/reference/options/
  languages.javascript = {
    enable = true;
    yarn = {
      enable = true;
      package = pkgs.yarn-berry;
      install.enable = true;
    };
  };

  packages = [pkgs.reuse];

  stdenv = pkgs.stdenvNoCC;
}
