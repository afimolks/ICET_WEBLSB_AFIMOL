<?php
$sum=0; $r=0;
$n=12345;
for ($i=0;$i<=strlen($n);$i++)
{
	$r=$n%10;
	$s=$s+$r;
	$n=$n/10;
}
echo "sum of digits "12345" is $s;"
?>