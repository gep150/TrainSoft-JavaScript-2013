<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if (isset($_SESSION['user'])) {
    echo '<input type="hidden" id="is_logged" value="TRUE" />';
}
else {
    echo '<input type="hidden" id="is_logged" value="FALSE" />';
}