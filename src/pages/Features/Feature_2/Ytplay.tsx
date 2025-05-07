import React from "react";
import { ListVideo } from "lucide-react";

interface PlaylistViewerProps {
  moduleName: string;
}

const PlaylistViewer: React.FC<PlaylistViewerProps> = ({ moduleName }) => {
  const playlistMap: Record<string, string> = {
    //WAS
    'WAS-Module-1': 'PLb3Ofnw16r2ypuJ7E7KJDsGbX8BGFIYST&si=1D9nifFAoeuU2DgY',
    'WAS-Module-2': 'PLb3Ofnw16r2xufYXObxnzG4AySLhyfcVx&si=4aHCzVVbGzSH3l7m',
    'WAS-Module-3': 'PLb3Ofnw16r2xTpWxjGiqM5770e0f76ssv&si=4bcRSOUrMtYq9Azm',
    'WAS-Module-4': 'PLb3Ofnw16r2wHDKbXaSUNOATFVfU-kf_9&si=tGFOvJZytUPuPxv7',
    'WAS-Module-5': 'PLb3Ofnw16r2xt6AMyPXSHyD0N01Jf8w1C&si=n_pB3FBOatbqvoUr',

    //CSE
    'CSE-Module-1': 'PLb3Ofnw16r2yddsPGQNdR1RRXJ9ZG-4vD&si=jv9D3TrG-zarIxC_',
    'CSE-Module-2': 'PLb3Ofnw16r2yeAF9r7-ypOET2dTkmi-K6&si=--w-2kK5KtIkvHKl',
    'CSE-Module-3': 'PLb3Ofnw16r2zQT9RbInGtDkK043g5NelZ&si=50OIMbnFCnnyNANX',
    'CSE-Module-4': 'PLb3Ofnw16r2x1PV9WAgRkXii5UVV08Hjm&si=B-9VcZiqXXNbAclR',
    'CSE-Module-5': 'PLb3Ofnw16r2zCeCpeO8wQ0ggLcQimJz-e&si=PqXC5s7gvbz5i6I0',

    //OOPJ
    'OOPJ-MODULE-1': 'PLb3Ofnw16r2zEWZGXGJxDMgl-xnQXR20J&si=gV1GiF4SnHiF5Ril',
    'OOPJ-MODULE-2': 'PLb3Ofnw16r2wNVSnvAiE05yWX7heP_rbQ&si=Li8BliYWHBr1JfVf',
    'OOPJ-MODULE-3': 'PLb3Ofnw16r2yCsbWL4xMdOAa1h3_qM6FY&si=j9EZrGAXVb741g6a',
    'OOPJ-MODULE-4': 'PLb3Ofnw16r2zZTJ-NXXnwuanG5pOnsQEm&si=CnC_JKFsj1QB5jFz',
    'OOPJ-MODULE-5': 'PLb3Ofnw16r2wgkDD8agK1MEq1fXI8SX3k&si=qTXfBeVq-LVT-Wfd',

    //MAD
    'MAD-Module-1': 'PLb3Ofnw16r2z3HiRiFMv3dScez7LjBPRe&si=O10otXiiYZTcxgvR',
    'MAD-Module-2': 'PLb3Ofnw16r2z3HiRiFMv3dScez7LjBPRe&si=O10otXiiYZTcxgvR',
    'MAD-Module-3': 'PLb3Ofnw16r2ypVJfOFdObXqKs4xiQdAEX&si=X2_5a83Qd2MS97sq',
    'MAD-Module-4': 'PLb3Ofnw16r2wnbR1roi0Itc_3I65WF4KV&si=wX3Yw8haHrVb3v20',
    'MAD-Module-5': 'PLb3Ofnw16r2yZvVWolXcvpIQ4GtotnKKc&si=J0afTuBDpyCX4hWO',

    //CC
    'CC-Module-1': 'PLb3Ofnw16r2xhjQXorLJPVlC5nHtYzRm9&si=Qg0v0gGJLdZ2y7Oe',  
    'CC-Module-2': 'PLb3Ofnw16r2zkz2Of6SIP0wVTdmN6NnPd&si=AMQf0pARPja-cJOm',
    'CC-Module-3': 'PLb3Ofnw16r2xoT9f_Bqs1TeIY390xlR_D&si=fH-VhDMleBNyNPpU',
    'CC-Module-4': 'PLb3Ofnw16r2xhjQXorLJPVlC5nHtYzRm9&si=I_qDKTaoDG5EK9Rj',
    'CC-Module-5': 'PLb3Ofnw16r2y2rzWyOgoW7cl_94naJb4R&si=5UayaYR76AJ8rH5n',

    // DAA
    'DAA-MODULE-1': 'PLb3Ofnw16r2xMzyfXoZlvRx7BO9R4OddJ&si=klbHeleIiyefoqGh',
    'DAA-MODULE-2': 'PLb3Ofnw16r2wjZkADYjjC4Tp2p6iRaKRp&si=VSzOkn1H0bssQy7P',
    'DAA-MODULE-3': 'PLb3Ofnw16r2zw2Jskjw-Kbnwqr1w4Z4Le&si=sn3ygQE24gVC8mK0',
    'DAA-MODULE-4': 'PLb3Ofnw16r2yVE5ROHjQmIW_DYRXdz3Eo&si=usNdwsufuwKekLdo',
    'DAA-MODULE-5': 'PLb3Ofnw16r2xHVUtHXNE30-SaBqA4C138&si=GQ-tAAvc9AqL1-4K',
    // IOT
    'IOT-MODULE-1': 'PLb3Ofnw16r2yE1JkKRPbxnoaebHlf6BVK&si=XFshAOm3wLojsbNv',
    'IOT-MODULE-2': 'PLb3Ofnw16r2yfE7nw9R-0vMEQ05dICtVm&si=J0lHea7Er2W1UyDa',
    'IOT-MODULE-3': 'PLb3Ofnw16r2xlIP4L-CK-CUN5noK9oe9k&si=NN29MzdE20U_gVvh',
    'IOT-MODULE-4': 'PLb3Ofnw16r2zvoChZQM3WezNJXwCyagKu&si=QLjW76I0az3FcW0k',
    'IOT-MODULE-5': 'PLb3Ofnw16r2wQRt-vd06-NK_SFUUkWDVd&si=-0r7WKLIZgQ1eM-e',
    //  DLD
    'DLD-MODULE-1': 'PLb3Ofnw16r2z-UhvnSV0QGSSQE4yUUz2z&si=9Jbw7WqhbFXshreg',
    'DLD-MODULE-2': 'PLb3Ofnw16r2wb0_nbhIeNpCd6mj0qddJs&si=euNCJtbXsGJVbPd3',
    'DLD-MODULE-3': 'PLb3Ofnw16r2wb0_nbhIeNpCd6mj0qddJs&si=L9PYXdG7FK_SmHZb',
    'DLD-MODULE-4': 'PLb3Ofnw16r2wB635_kwXvNym1oNmLGD_j&si=oBVfrUGXT9shE4Qj',
    'DLD-MODULE-5': 'PLb3Ofnw16r2ylyBmXXM3ByNFLFHGzkJOJ&si=mJ8xEzid1UiHOWFU',
    //  CN
    'CN-MODULE-1': 'PLb3Ofnw16r2w_BREVaaMpcMC5XC5K_VXI&si=XqxsUzT9YYR0zmth',
    'CN-MODULE-2': 'PLb3Ofnw16r2x0GruanQUApEFkJYZ8rNjx&si=dg6De86k-eDUA6f5',
    'CN-MODULE-3': 'PLb3Ofnw16r2xegovJcHWAzD6DpwC9JT6A&si=q6JygiF8JdkyJfOy',
    'CN-MODULE-4': 'PLb3Ofnw16r2yH3Tf8EYGebKtx7f8LZ3zB&si=4VQcg_dVNWZ_6anS',
    'CN-MODULE-5': 'PLb3Ofnw16r2zU058KqalWxzO2oYzPxssV&si=FkM9D3MlIzWa5DaQ',
    //  EH
    'EH-Module-1': 'PLb3Ofnw16r2xeg2w9LkPr7XZT1zjwL88j&si=3VIfD_BAua-ONm1X',
    'EH-Module-2': 'PLb3Ofnw16r2wdJdYYQ_DFvPhGQHPCPAws&si=loc80aqQ5HGnIawD',
    'EH-Module-3': 'PLb3Ofnw16r2wdbSNglJO1TO6xUP3SD14a&si=89bs0RHk2kcSpLjF',
    'EH-Module-4': 'PLb3Ofnw16r2wqwoA5iz6uloR7oSsHCjQi&si=GsLe8z8BDSFv1TbS',
    'EH-Module-5': 'PLb3Ofnw16r2zCeCpeO8wQ0ggLcQimJz-e&si=DY7C63eIn7Pb77c8',
    //  CD
    'CD-Module-1': 'PLb3Ofnw16r2wnHw15g4yUe-0k2-cVFVIg&si=XjLQ7PLiI03cCOOS',
    'CD-Module-2': 'PLb3Ofnw16r2xIhr6o1t_vrNAGwucHKrAp&si=HXSQS86gcVyFmiAD',
    'CD-Module-3': 'PLb3Ofnw16r2x0UA1YqO_RLynUgsUCFvQ0&si=_J3emobMmd8c_vhx',
    'CD-Module-4': 'PLb3Ofnw16r2zgu4PFDwgWByhEYRVMi1kw&si=o3GnJfldMZB86wH6',
    'CD-Module-5': 'PLb3Ofnw16r2ytO5lUamwg7xogV7KNOkZq&si=r8xtpvyRkaQtRoJB',
    //  TOC
    'TOC-MODULE-1': 'PLb3Ofnw16r2xsG4K9TILmfG0Ege3lSJYn&si=QfNfHdVUK9u5L6PU',
    'TOC-MODULE-2': 'PLb3Ofnw16r2zbQOePUb1ldVSpK1Uy7TpC&si=FHCcbFEiQ9z-dptF',
    'TOC-MODULE-3': 'PLb3Ofnw16r2yTQnqATR-otwDhcOZPNA6h&si=WZLvE68cdcghEgiF',
    'TOC-MODULE-4': 'PLb3Ofnw16r2yTQnqATR-otwDhcOZPNA6h&si=WZLvE68cdcghEgiF',
    'TOC-MODULE-5': 'PLb3Ofnw16r2wrcyl9Kj3aZ9y4G0T9lA_C&si=D0iumlX2Bq-vxH_Y',
    // DMS
    'DMS-MODULE-1': 'PLb3Ofnw16r2z65LuxborxQWhlFm4jTz6B&si=0E-uB8EQ_qp8VrgU',
    'DMS-MODULE-2': 'PLb3Ofnw16r2zVVzEbnHRWbfKzJaTaimjc&si=-4gjKGDYY3w5Vxof',
    'DMS-MODULE-3': 'PLb3Ofnw16r2yUlaTU4E0UfZ7S0p3IxW3T&si=G5vq2Scv_6AVafr0',
    'DMS-MODULE-4': 'PLb3Ofnw16r2zPyeiYbX7WbaLFqPB8L-UD&si=VYbk19CPhq8BVLPV',
    'DMS-MODULE-5': 'PLb3Ofnw16r2ym49aLX356Q7GDsrAqBdHg&si=ISWFJJMrvH6pXsjy',

    // AI
    'AI-Module-1': 'PLb3Ofnw16r2wwDZptC3hJ5Zzg8v_u39xu&si=jKoaxudFA1xgzPAs',
    'AI-Module-2': 'PLb3Ofnw16r2xlzbsBHi9_cW4P8YJYAYEp&si=zXNfMhGfs6ARFKIt',
    'AI-Module-3': 'PLb3Ofnw16r2wqLQnfXaW6hYijdBvAgP4k&si=v3CWhAMelIyEl87b',
    'AI-Module-4': 'PLb3Ofnw16r2wJNf0jYYkhZeYUWKn-MOrN&si=BHMusSR2PaDq08RR',
    'AI-Module-5': 'PLb3Ofnw16r2xpHJ0a7ANvaUOpbdKm1hd1&si=WcIT1mhsUOIRehIV',
    //  CTT
    'CTT-MODULE-1': 'PLb3Ofnw16r2yvYMCoM88vbkvHmQ7YiO78&si=gqrnC1A0O5FmicbS',
    'CTT-MODULE-2': 'PLb3Ofnw16r2zWaqIx4R-RQFVQ_wNuAiYH&si=GLbp1Bh4GN5ExEZi',
    'CTT-MODULE-3': 'PLb3Ofnw16r2wyPcAV7ujmhCJkaoMLnxk5&si=ibYSrzr0SU-0BxOn',
    'CTT-MODULE-4': 'PLb3Ofnw16r2y-IjWDPo8P-ffKLJZ33IRR&si=TApbJG7oVmAySTOF',
    'CTT-MODULE-5': 'PLb3Ofnw16r2xjjfzyW2-dDy8OZvSd7AH4&si=caQ-IUH9HnpsfbXG',
    //  DIS
    'DiS-Module-1': 'PLb3Ofnw16r2xaGd35YD3vyv5vTqdAbM8w&si=KQSuWsySregmuZ2M',
    'DiS-Module-2': 'PLb3Ofnw16r2wxrSjQ3LTjXulh4vZit_7w&si=jDHaYddfj6gv-Q6G',
    'DiS-Module-3': 'PLb3Ofnw16r2yKpS8U96DDQjxuHsDkRS5w&si=T9cPAmAZNPUwugYj',
    'DiS-Module-4': 'PLb3Ofnw16r2yft4lFU8byLQ6q7tM4DCY_&si=4M5EAEHsgbAKt8KZ',
    'DiS-Module-5': 'PLb3Ofnw16r2xQf7L5w6wL1FugrUqgK94E&si=mSmirENiB5BTqE12',
    //  OOMD
    'OOMD-Module-1': 'PLb3Ofnw16r2xOqefBynE4A7AofzeiVAAF&si=_nRSobEEgTRUBuf9',
    'OOMD-Module-2': 'PLb3Ofnw16r2wkBCGffnzO0I2DsbBoj3jm&si=oi098MeuG8m5Z6C4',
    'OOMD-Module-3': 'PLb3Ofnw16r2zYhmZuiLcJcAeMYF0XtGQ8&si=6mSlgpd43Im8CItb',
    'OOMD-Module-4': 'PLb3Ofnw16r2ykokugt5hMxHrawjdElAR_&si=TUc8VqvM-MYOnzG0',
    'OOMD-Module-5': 'PLb3Ofnw16r2xR3Kqx7_Sk3KnRTuVmz3Km&si=ZYNULPrcGjA0Tqvq',
    //  SE
    'SE-MODULE-1': 'PLb3Ofnw16r2xG5Crmf5i9BFMGHrH8WHOb&si=gqepJxdAyv2a4H4P',
    'SE-MODULE-2': 'PLb3Ofnw16r2z6KU1Chq6nBrQm0EgzW4Iy&si=N5e9RXyhWurxSHg-',
    'SE-MODULE-3': 'PLb3Ofnw16r2xLg7fL-O6b_ZHamJDbUVK_&si=YQ9fAdB4872Hq8AX',
    'SE-MODULE-4': 'PLb3Ofnw16r2zEXmxXvot1IaANDviwvDKu&si=Gaq4f9NqM4KEp3u4',
    'SE-MODULE-5': 'PLb3Ofnw16r2zuzk6jfP0tmJmc0xKDoJvD&si=J5qXJpfVVbiZH6Jn',
    // Coa
    'CAO-Module-1': 'PLa2p_z_H1rA55dCGMf1A9ab5XdrRrkMQV&si=H68BUa3byHk0O9JU',
    'CAO-Module-2': 'PLa2p_z_H1rA6F-WU9FplGld1ccrmtBMLa&si=mvTxpzNFFuPps8To',
    'CAO-Module-3': 'PLa2p_z_H1rA4GfAizKX6Zb2nIimcQFGrH&si=LewkyH6sdzRko_30',
    'CAO-Module-4': 'PLa2p_z_H1rA6hQY2Y6hFqCanoiqS5OUnL&si=kEaa5yR5zoaC7FZR',
    'CAO-Module-5': 'PLa2p_z_H1rA4_QCW0EHzaTxIu8Bl7JUPN&si=U3L8bMSJZFopTG7f',
    // DL
    'DL-Module-1': 'PLa2p_z_H1rA7p1so7fLaV5aDHMwWOhdVk&si=xbibtP2eryOimJw1',
    'DL-Module-2': 'PLa2p_z_H1rA5Guw_4-j3O6U5vXnKj0d6I&si=KGIbyCTfB-z2QXan',
    'DL-Module-3': 'PLa2p_z_H1rA6kxQCVbBBfWEQ6K-jIqfnt&si=PJA9BjwQ6ruGzZeX',
    'DL-Module-4': 'PLa2p_z_H1rA595k_yHKxYGrYTBM-pjZXr&si=0ENShTfI_R6-41me',
    'DL-Module-5': 'PLa2p_z_H1rA5yx_ySye27KgdDVLkWMwPk&si=zKUkMfK7NogcScQc',
    // DM
    'DM-MODULE-1': 'PLa2p_z_H1rA4HwHYZAmCiRv2KSzt_gQxH&si=FcXN3EFaKOlUYZR0',
    'DM-MODULE-2': 'PLa2p_z_H1rA6FUM19Z4x0BtdU86wwChYs&si=leIaDDdKqfoQkElU',
    'DM-MODULE-3': 'PLa2p_z_H1rA4lWT75hnUp0mxpqEnQ2TpF&si=ebHY6MbDaZDyiSS9',
    'DM-MODULE-4': 'PLa2p_z_H1rA6jAqcFobZRqYjtpgkM2rvj&si=dZbFbkBVYY1uy1Q5',
    'DM-MODULE-5': 'PLa2p_z_H1rA4stkspqyJLmZyHGgT0OGLp&si=KiykUQv1TguvV6j9',
    // MTLA
    'MTLA-MODULE-1': 'PLa2p_z_H1rA6afbLnJVZ0ECKvuvYPS1HP&si=tz5wsPRQG1Bbzp_O',
    'MTLA-MODULE-2': 'PLa2p_z_H1rA4Fye81O5MqL6Icp_s-nTIm&si=kj7HO6l32TAPRf71',
    'MTLA-MODULE-3': 'PLa2p_z_H1rA77fryZvKjgivjceEx49vPa&si=P8-GhmhD7kjyE4Uy',
    'MTLA-MODULE-4': 'PLa2p_z_H1rA5MQ17n0nf5-aK7m6aUJIV3&si=XFjFn-ME10sgEavt',
    'MTLA-MODULE-5': 'PLa2p_z_H1rA6eLHxWsnrcxD_rtd3h2pLH&si=KonnYec1WAG1HpQ2',
    // ANN
    'ANN-Module-1': 'PLa2p_z_H1rA7LelJ0k_APkVRO3eRhpmdX&si=z82stf8qk3bcIhQH',
    'ANN-Module-2': 'PLa2p_z_H1rA4e2OR9NgcfqJMyDCftDcd4&si=q9Kjp0ZQGLtyozcm',
    'ANN-Module-3': 'PLa2p_z_H1rA6WeERLQ5qWJQl63BK4Bh2b&si=TLol1bVcw6aAMUKC',
    'ANN-Module-4': 'PLa2p_z_H1rA5MQ17n0nf5-aK7m6aUJIV3&si=m0OOrvMEGkekS_mH',
    'ANN-Module-5': 'PLb3Ofnw16r2xDoj-0IM4oWaWf-rI06kTI&si=Nmn70MF7EAbTPjAo',
    // python
    'PP-Module-1': 'PLa2p_z_H1rA6yIwFpZ8VRVIJ9z_O9DU2d&si=8C93pbCCVkqEggJn',
    'PP-Module-2': 'PLa2p_z_H1rA6l0Zxe7uufrcqt2JBu8HK9&si=29H-Pkov1ecTq_r6',
    'PP-Module-3': 'PLb3Ofnw16r2zWDpS908Z4Sccw6HZs8oeQ&si=vQLQa24QSguupaLW',
    'PP-Module-4': 'PLb3Ofnw16r2xMeTrYyAIodlqQY5UdRjIn&si=vj1ul42K7R9pjIuW',
    'PP-Module-5': 'PLa2p_z_H1rA7Nrtr_ZbNISp3wFdoeFNtK&si=i8aZ7wxz3QoNI8_L',

    // PC 

    'PC-MODULE-1': 'PLb3Ofnw16r2zvlu4WN5mnAJ9tL-I_F1Fb&si=M_8AhZGaT8mx7oze',
    'PC-MODULE-2': 'PLb3Ofnw16r2xZBbDy_i1wzm3JsanZ1EjU&si=5ck641AfI4yJ5FkC',
    'PC-MODULE-3': 'PLb3Ofnw16r2xMeTrYyAIodlqQY5UdRjIn&si=mX8EaBYubtpZk9dp',
    'PC-MODULE-4': 'PLb3Ofnw16r2zWDpS908Z4Sccw6HZs8oeQ&si=LKNgyKDGiXeRzVtK',
    'PC-MODULE-5': 'PLb3Ofnw16r2ycBfG6XUNzqy5erwMFdYqH&si=Y5eciDMhdjPPl61I',

    // PPS 
    'PPS-Module-1': 'PLb3Ofnw16r2xjErqPxFlWWEnBVIcplS3O&si=AawSbZU2moTo1svL',
    'PPS-Module-2': 'PLb3Ofnw16r2ySK_CKu9A22OkBM4d3pkZ4&si=yqGLCPnWo0gk6JYs',
    'PPS-Module-3': 'PLb3Ofnw16r2ySK_CKu9A22OkBM4d3pkZ4&si=ODi9IQnZxo97ThMA',
    'PPS-Module-4': 'PLb3Ofnw16r2zmJGIwMwOzf2A9t6YBe8PV&si=_Wcl-PyoVowsl-hF',
    'PPS-Module-5': 'PLb3Ofnw16r2xxaKc5FLAvAsM9Dpjh1aHA&si=Yzh3VK6_-cBqi483',

    // RP 
    'RP-MODULE-1': 'PLb3Ofnw16r2ztQ2WcHtFyMre6rb4BSY6I&si=x-ARskmkOYhxxjBT',
    'RP-MODULE-2': 'PLb3Ofnw16r2xtfYareLf-t7ptO4jN13YB&si=6DtdZyWCDmFLm-2R',
    'RP-MODULE-3': 'PLb3Ofnw16r2yOxjWCivd_G9Vdb5yExybr&si=jc_ZK2vZL7YERPOk',
    'RP-MODULE-4': 'PLb3Ofnw16r2y5Gi9uu-6319ZvomoslIfW&si=WfAyEtDiEO6-5bdS',
    'RP-MODULE-5': 'PLb3Ofnw16r2zLfdSjBMKGczFXS3PxGKwu&si=XbjhiKS43QC0OFa_',

    // BEEE 
    'BEEE-MODULE-1': 'PLb3Ofnw16r2wmkOlvmYB3tFTL7Hk_f8Hi&si=fAQxaGwjcCAQ27Ya',
    'BEEE-MODULE-2': 'PLb3Ofnw16r2zDoKbt4MYy7sod16IfuuN3&si=KeJwMEzeBbzHnOZN',
    'BEEE-MODULE-3': 'PLb3Ofnw16r2y2amZY_2WLksPIWSz-W7JC&si=V3b1s8n8WeY6Gm-b',
    'BEEE-MODULE-4': 'PLb3Ofnw16r2wme_z-OsZDgCrp328ijzY7&si=i9UO264pTBhnRVHA',
    'BEEE-MODULE-5': 'PLb3Ofnw16r2x1Qring0CnPJk9fAEogxnW&si=oT-QvrOyTn77W5wG',

    // CNS 
    'CNS-Module-1': 'PLb3Ofnw16r2xZ1Ww2kZCgU3cO8mYF4TBq&si=kk4IL_-gaXmXna8Y',
    'CNS-Module-2': 'PLb3Ofnw16r2wHLyk7rBCwb3_oYASKXz7-&si=kiC8nJ1XqRBvsMd6',
    'CNS-Module-3': 'PLb3Ofnw16r2z80Fvtzj63NECSlcZs9_xh&si=VTq5XDmzB5nIFKFl',
    'CNS-Module-4': 'PLb3Ofnw16r2wSksNAiYCrbnPl_ZxqECNX&si=JrfUWf3hpIjwN2JS',
    'CNS-Module-5': 'PLb3Ofnw16r2zcZVYGwdNKTu7APf0H5EyK&si=nmQXYMmCVrPcbp16',

    // Add all your module-to-playlist mappings here
  };

  const playlistId = playlistMap[moduleName];

  if (!playlistId) {
    return (
      <p className="text-red-500">No Videos found for <strong>{moduleName}</strong>.</p>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
  const modUrl = `https://www.youtube.com/playlist?list=${playlistId}`;

  return (
    <>
      <div className="flex justify-between items-center text-black dark:text-white">
        <div className="inline-flex items-center">
          <p className="inline m-0">Click on the</p>
          <span className="inline mx-1"><ListVideo /></span>
          <p className="inline m-0">to view the other Videos Related to the Module</p>
        </div>

        <a
          href={modUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 dark:bg-orange-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-colors text-sm"
        >
          View Videos in Youtube
        </a>
      </div>


      <div className="w-full h-[625px] mt-4">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src={embedUrl}
          title={`YouTube Playlist for ${moduleName}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default PlaylistViewer;
