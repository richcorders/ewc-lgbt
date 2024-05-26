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

  # https://devenv.sh/pre-commit-hooks/
  pre-commit.hooks = {
    shellcheck.enable = true;
  };

  stdenv = pkgs.stdenvNoCC;
}
