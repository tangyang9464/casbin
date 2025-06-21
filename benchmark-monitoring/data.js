window.BENCHMARK_DATA = {
  "lastUpdate": 1750487197057,
  "repoUrl": "https://github.com/tangyang9464/casbin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hsluoyz@gmail.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@gmail.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "c6f6cfcd1a0b22667290b2aba93290a5ee78ca5d",
          "message": "feat: refactor out abac_test.go",
          "timestamp": "2025-06-07T16:53:33+08:00",
          "tree_id": "de605753bfef5ffd6c549ddd3937527e4ed20a2a",
          "url": "https://github.com/tangyang9464/casbin/commit/c6f6cfcd1a0b22667290b2aba93290a5ee78ca5d"
        },
        "date": 1750487196602,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 14.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "160555315 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 14.94,
            "unit": "ns/op",
            "extra": "160555315 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "160555315 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "160555315 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 181.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13053284 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 181.5,
            "unit": "ns/op",
            "extra": "13053284 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13053284 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13053284 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 182.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13067533 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 182.1,
            "unit": "ns/op",
            "extra": "13067533 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13067533 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13067533 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 202.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "11766765 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 202.1,
            "unit": "ns/op",
            "extra": "11766765 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "11766765 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "11766765 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 216.3,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "11486653 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 216.3,
            "unit": "ns/op",
            "extra": "11486653 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "11486653 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "11486653 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 170.7,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "12609638 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 170.7,
            "unit": "ns/op",
            "extra": "12609638 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "12609638 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "12609638 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 185.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "12843805 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 185.5,
            "unit": "ns/op",
            "extra": "12843805 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "12843805 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12843805 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 197.8,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "12196819 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 197.8,
            "unit": "ns/op",
            "extra": "12196819 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "12196819 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12196819 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 2874,
            "unit": "ns/op\t    1530 B/op\t      17 allocs/op",
            "extra": "815172 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2874,
            "unit": "ns/op",
            "extra": "815172 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1530,
            "unit": "B/op",
            "extra": "815172 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "815172 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 207.7,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "11511080 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 207.7,
            "unit": "ns/op",
            "extra": "11511080 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "11511080 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "11511080 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 183.4,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13081580 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 183.4,
            "unit": "ns/op",
            "extra": "13081580 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13081580 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13081580 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 183.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13129048 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 183.5,
            "unit": "ns/op",
            "extra": "13129048 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13129048 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13129048 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext",
            "value": 310.2,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "7737222 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 310.2,
            "unit": "ns/op",
            "extra": "7737222 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "7737222 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "7737222 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 174.9,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "13178688 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 174.9,
            "unit": "ns/op",
            "extra": "13178688 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "13178688 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13178688 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 569.1,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "4399608 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 569.1,
            "unit": "ns/op",
            "extra": "4399608 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "4399608 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "4399608 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 565.5,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "3975793 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 565.5,
            "unit": "ns/op",
            "extra": "3975793 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "3975793 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "3975793 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 620.1,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "3876331 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 620.1,
            "unit": "ns/op",
            "extra": "3876331 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "3876331 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3876331 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 554.8,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "4302825 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 554.8,
            "unit": "ns/op",
            "extra": "4302825 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4302825 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "4302825 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 666.9,
            "unit": "ns/op\t     167 B/op\t       7 allocs/op",
            "extra": "3203715 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 666.9,
            "unit": "ns/op",
            "extra": "3203715 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 167,
            "unit": "B/op",
            "extra": "3203715 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3203715 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1135,
            "unit": "ns/op\t     418 B/op\t       9 allocs/op",
            "extra": "1847642 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1135,
            "unit": "ns/op",
            "extra": "1847642 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 418,
            "unit": "B/op",
            "extra": "1847642 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1847642 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 501,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "4404712 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 501,
            "unit": "ns/op",
            "extra": "4404712 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "4404712 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "4404712 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 582.9,
            "unit": "ns/op\t     174 B/op\t       7 allocs/op",
            "extra": "3942674 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 582.9,
            "unit": "ns/op",
            "extra": "3942674 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 174,
            "unit": "B/op",
            "extra": "3942674 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3942674 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 619.9,
            "unit": "ns/op\t     181 B/op\t       8 allocs/op",
            "extra": "3859858 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 619.9,
            "unit": "ns/op",
            "extra": "3859858 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 181,
            "unit": "B/op",
            "extra": "3859858 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "3859858 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 14.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "160639016 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 14.95,
            "unit": "ns/op",
            "extra": "160639016 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "160639016 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "160639016 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 3718,
            "unit": "ns/op\t    1495 B/op\t      16 allocs/op",
            "extra": "649819 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3718,
            "unit": "ns/op",
            "extra": "649819 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1495,
            "unit": "B/op",
            "extra": "649819 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "649819 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 5556,
            "unit": "ns/op\t    2052 B/op\t      34 allocs/op",
            "extra": "438057 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5556,
            "unit": "ns/op",
            "extra": "438057 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2052,
            "unit": "B/op",
            "extra": "438057 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 34,
            "unit": "allocs/op",
            "extra": "438057 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 50203,
            "unit": "ns/op\t   20318 B/op\t     479 allocs/op",
            "extra": "48007 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 50203,
            "unit": "ns/op",
            "extra": "48007 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20318,
            "unit": "B/op",
            "extra": "48007 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 479,
            "unit": "allocs/op",
            "extra": "48007 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 523724,
            "unit": "ns/op\t  191771 B/op\t    4827 allocs/op",
            "extra": "4605 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 523724,
            "unit": "ns/op",
            "extra": "4605 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191771,
            "unit": "B/op",
            "extra": "4605 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "4605 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 5475960,
            "unit": "ns/op\t 1903155 B/op\t   48268 allocs/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5475960,
            "unit": "ns/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1903155,
            "unit": "B/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48268,
            "unit": "allocs/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 62366,
            "unit": "ns/op\t   20338 B/op\t     614 allocs/op",
            "extra": "38071 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 62366,
            "unit": "ns/op",
            "extra": "38071 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20338,
            "unit": "B/op",
            "extra": "38071 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 614,
            "unit": "allocs/op",
            "extra": "38071 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 597110,
            "unit": "ns/op\t  194655 B/op\t    6015 allocs/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 597110,
            "unit": "ns/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194655,
            "unit": "B/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6015,
            "unit": "allocs/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 5997051,
            "unit": "ns/op\t 1930785 B/op\t   60122 allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 5997051,
            "unit": "ns/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1930785,
            "unit": "B/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60122,
            "unit": "allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 4615,
            "unit": "ns/op\t    1834 B/op\t      26 allocs/op",
            "extra": "490556 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4615,
            "unit": "ns/op",
            "extra": "490556 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1834,
            "unit": "B/op",
            "extra": "490556 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 26,
            "unit": "allocs/op",
            "extra": "490556 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 5247,
            "unit": "ns/op\t    1815 B/op\t      24 allocs/op",
            "extra": "466597 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5247,
            "unit": "ns/op",
            "extra": "466597 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1815,
            "unit": "B/op",
            "extra": "466597 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "466597 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 2894,
            "unit": "ns/op\t    1522 B/op\t      16 allocs/op",
            "extra": "807177 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2894,
            "unit": "ns/op",
            "extra": "807177 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1522,
            "unit": "B/op",
            "extra": "807177 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "807177 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 4284920,
            "unit": "ns/op\t 1330830 B/op\t   40092 allocs/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 4284920,
            "unit": "ns/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1330830,
            "unit": "B/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40092,
            "unit": "allocs/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 6301,
            "unit": "ns/op\t    3056 B/op\t      36 allocs/op",
            "extra": "375624 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6301,
            "unit": "ns/op",
            "extra": "375624 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3056,
            "unit": "B/op",
            "extra": "375624 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "375624 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 7075,
            "unit": "ns/op\t    2468 B/op\t      48 allocs/op",
            "extra": "335708 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 7075,
            "unit": "ns/op",
            "extra": "335708 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2468,
            "unit": "B/op",
            "extra": "335708 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 48,
            "unit": "allocs/op",
            "extra": "335708 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 4364,
            "unit": "ns/op\t    1751 B/op\t      21 allocs/op",
            "extra": "549621 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4364,
            "unit": "ns/op",
            "extra": "549621 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1751,
            "unit": "B/op",
            "extra": "549621 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "549621 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 14754,
            "unit": "ns/op\t    8873 B/op\t      71 allocs/op",
            "extra": "162318 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 14754,
            "unit": "ns/op",
            "extra": "162318 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 8873,
            "unit": "B/op",
            "extra": "162318 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "162318 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 49336,
            "unit": "ns/op\t     800 B/op\t     100 allocs/op",
            "extra": "48493 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 49336,
            "unit": "ns/op",
            "extra": "48493 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 800,
            "unit": "B/op",
            "extra": "48493 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "48493 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 522438,
            "unit": "ns/op\t   13953 B/op\t    1744 allocs/op",
            "extra": "4615 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 522438,
            "unit": "ns/op",
            "extra": "4615 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 13953,
            "unit": "B/op",
            "extra": "4615 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 1744,
            "unit": "allocs/op",
            "extra": "4615 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 6361053,
            "unit": "ns/op\t  229957 B/op\t   19744 allocs/op",
            "extra": "351 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 6361053,
            "unit": "ns/op",
            "extra": "351 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 229957,
            "unit": "B/op",
            "extra": "351 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 19744,
            "unit": "allocs/op",
            "extra": "351 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 363512733,
            "unit": "ns/op\t88423629 B/op\t 3596883 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 363512733,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 88423629,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 3596883,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 13061299,
            "unit": "ns/op\t 4383326 B/op\t  142324 allocs/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 13061299,
            "unit": "ns/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 4383326,
            "unit": "B/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 142324,
            "unit": "allocs/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 369330060,
            "unit": "ns/op\t90176570 B/op\t 3673455 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 369330060,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 90176570,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 3673455,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 1081,
            "unit": "ns/op\t     113 B/op\t       9 allocs/op",
            "extra": "2203155 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 1081,
            "unit": "ns/op",
            "extra": "2203155 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 113,
            "unit": "B/op",
            "extra": "2203155 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2203155 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 387,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6026845 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 387,
            "unit": "ns/op",
            "extra": "6026845 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "6026845 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6026845 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 1082,
            "unit": "ns/op\t     112 B/op\t       9 allocs/op",
            "extra": "2239986 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 1082,
            "unit": "ns/op",
            "extra": "2239986 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2239986 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2239986 times\n4 procs"
          }
        ]
      }
    ]
  }
}