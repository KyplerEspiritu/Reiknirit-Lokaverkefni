<!DOCTYPE html>
<html>
	<head>
		<title>Lokaverkefni</title>
		<link rel="stylesheet" type="text/css" href="../static/css/index.css">
	</head>
	<body>

		<div class="inputCoordinates">
			<span id="firstVigurStyleX">Fyrsti Vigur X</span><br>
			<input type="number" id="firstVigurX"><p>
			<span id="firstVigurStyleY">Fyrsti Vigur Y</span><br>
			<input type="number" id="firstVigurY"><p>
			<span id="annarVigurStyleX">Annar Vigur X</span><br>
			<input type="number" id="secondVigurX"><p>
			<span id="annarVigurStyleY">Annar Vigur Y</span><br>
			<input type="number" id="secondVigurY"><p>

			<button type="submit" onclick="drawVigurs()">ENTER</button>
		</div>

		<div class="table">
			<table>
				<tr id="firstCoordinatesStyle">
					<th>Fyrsti Vigur</th>
					<th id="firstCoordinates"></th>
				</tr>
				<tr id="secondCoordinatesStyle">
					<th>Annar Vigur</th>
					<th id="secondCoordiantes"></th>
				</tr>
				<tr>
					<th id="firstCoordinatesStyle">Lengd Fyrsta Vigurs</th>
					<th id="firstLengd"></th>
				</tr>
				<tr>
					<th id="firstCoordinatesStyle">Halli Fyrsta Vigurs</th>
					<th id="firstHalli"></th>
				</tr>
				<tr id="firstCoordinatesStyle">
					<th>Þvervigur Fyrsta Vigurs</th>
					<th id="firstThvervigur"></th>
				</tr>
				<tr>
					<th id="firstStefnuhornStyle">Stefnuhorn Fyrsta Vigurs</th>
					<th id="firstStefnuhorn"></th>
				</tr>
				<tr>
					<th id="hornMilliVigraStyle">Horn Milli Vigra</th>
					<th id="hornMilliVigra"></th>
				</tr>
				<tr id="summaMilliVigraStyle">
					<th>Summa Vigra</th>
					<th id="summaMilliVigra"></th>
				</tr>
			</table>
		</div>

		<canvas id="myCanvas" width="700" height="700" style="border:1px solid #bababa;padding-left: 0;padding-right: 0;margin-left: auto;margin-right: auto;display: block;"></canvas>
		<script src="../static/scripts/canvas.js"></script>
	</body>
</html>
